import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module
export default class CsudijoModule extends VuexModule {  
  private __showEditForm: boolean = false;
  private __editedFood: any;
  private __currentPage: number = 1; // aktuálisan megjelenő oldal sorszáma
  private __perPage: number = 5; // oldalanként megjelenő rekordok száma
  private __polling: number;

  // State (classic fields)
  private _cars: any = [];
  private _topPrice: any = [];

  private config: AxiosRequestConfig = {
    withCredentials: false,
    // Az ip számot írd át a backend Network címére és portjára, pl.:
    // baseURL: "http://192.168.1.68:3000",
    baseURL: "http://localhost:3000", // ha egy gépen fut minden (tesztelő böngésző, frontend, backend)
    //baseURL: "https://jedlik-venom-backend.herokuapp.com/",
    timeout: 9000
  };

  // Getters
  get cars(): any[] {
    return this._cars;
  }

  get topPrice(): any[] {
    return this._topPrice;
  }

  get numberOfCars(): number {
    return this.cars.length;
  }

  @Action
  public async getCars(): Promise<any> {
    axios
      .get("/csudijo", this.config)
      .then((res: AxiosResponse) => {
        const data: any = res.data;
        if (data) {          
          this.context.commit("mutateCars", data);
          // További akciók hívására van lehetőség (dispatch()):
          this.context.dispatch("getTopPriceList");
        }
      })
      .catch((ex: AxiosError) => alert(ex.message));
  }

  @Action
  public async getTopPriceList(): Promise<any> {
    axios
      .get("/csudijobest", this.config)
      .then((res: AxiosResponse) => {
        const data: any = res.data;
        this.context.commit("mutateTopPrices", data);
      })
      .catch((ex: AxiosError) => alert(ex.message));
  }

  @Action
  public async addNewCar(newCar: any): Promise<any> {
    axios
      .post("/csudijo", newCar, this.config)
      .then((res: AxiosResponse) => {
        if (res.data.errmsg || res.data.message) {
          alert(res.data.errmsg ? res.data.errmsg : res.data.message);
        } else {
          this.context.dispatch("getCars");
        }
      })
      .catch((ex: AxiosError) => alert(ex.message));
  } 
  

  @Mutation
  private mutateCars(data: any): void {
    this._cars = data;
  }

  @Mutation
  private mutateTopPrice(data: any): void {
    this._topPrice = [];
    if (!data.error) {     
      this._topPrice = data.map((a: any) => a.carName);
    }
  }
}
