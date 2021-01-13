import Vue from "vue";
import Vuex from "vuex";
import CarModule from "@/store/CarModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    carModule: CarModule
  }
});
