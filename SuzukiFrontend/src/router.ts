import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView.vue";
import AutoListaView from "./views/AutoListaView.vue";
import Keszitok from "./views/Keszitok.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    {
      component: HomeView,
      name: "home",
      path: "/home"
    },
    {
      component: AutoListaView,
      name: "auto",
      path: "/"
    },
    {
      component: Keszitok,
      name: "keszitok",
      path: "/keszitok"
    }
  ]
});
