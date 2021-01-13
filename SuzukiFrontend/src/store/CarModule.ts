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
  //Getters
  get cars(): any {
    return this._cars;
  }
  get uniqueNames(): any {
    return this._uniqueNames;
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
    console.log(this._uniqueNames);
  }
}
