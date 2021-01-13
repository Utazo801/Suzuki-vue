// import MyModule from "@/store/MyModule";
// import CsudijoModule from "@/store/CsudijoModule";
// import VuexDemoModule from "@/store/VuexDemoModule";
import Vue from "vue";
import Vuex from "vuex";
import CarModule from "@/store/CarModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    carModule: CarModule
    // csudijoModule: CsudijoModule,
    // vuexDemoModule: VuexDemoModule
    // // myModule: myModule,
  }
});
