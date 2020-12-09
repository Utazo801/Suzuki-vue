import Vue from "vue";
import Router from "vue-router";
// import CsudijoView from "./views/CsudijoView.vue";
import HomeView from "./views/HomeView.vue";
import VuexDemoView from "./views/VuexDemoView.vue";
import AutoListaView from "./views/AutoListaView.vue";

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
      component: VuexDemoView,
      name: "vuexDemo",
      path: "/vuexdemo"
    },
    {
      component: AutoListaView,
      name: "auto",
      path: "/auto"
    },
    /*{
      component: CsudijoView,
      name: "csudijo",
      path: "/"
    },*/
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
