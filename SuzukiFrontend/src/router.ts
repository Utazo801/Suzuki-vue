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
    },
    {
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/AboutView.vue"),
      name: "about",
      path: "/about"
    }
  ]
});
