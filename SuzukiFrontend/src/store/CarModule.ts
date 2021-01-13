import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module
export default class CarModule extends VuexModule {
  private config: AxiosRequestConfig = {
    withCredentials: false,
    baseURL: "http://localhost:3000",
    //baseURL: "https://jedlik-venom-backend.herokuapp.com/",
    timeout: 9000
  };
  //State
  private _cars: any = [];
  private _uniqueNames: Set<string> = new Set<string>();
  private _uniqueColors: Set<string> = new Set<string>();
  private _uniqueBHP: Set<string> = new Set<string>();

  //Getters
  get cars(): any {
    return this._cars;
  }
  get uniqueNames(): any {
    return this._uniqueNames;
  }
  get uniqueColors(): any {
    return this._uniqueColors;
  }
  get uniqueBHP(): any {
    return this._uniqueBHP;
  }
  //Actions
  //Autók lehívása
  @Action
  private async getCars(): Promise<any> {
    axios
      .get("/cars", this.config)
      .then((res: AxiosResponse) => {
        const data: any = res.data;
        if (data) {
          console.log(res.data);
          this.context.commit("mutateCars", data);
        }
      })
      .catch((ex: AxiosError) => alert(ex.message));
  }
  //Mutations
  @Mutation
  private mutateCars(data: any): void {
    this._cars = data;
    data.forEach((e: { CarName: string }) => {
      this._uniqueNames.add(e.CarName);
    });
    data.forEach((e: { Color: string }) => {
      this._uniqueColors.add(e.Color);
    });
    data.forEach((e: { BHP: string }) => {
      this._uniqueBHP.add(e.BHP);
    });
    console.log(this._uniqueNames);

    console.log(this._uniqueColors);
    console.log(this._uniqueBHP);
  }
}
