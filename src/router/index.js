import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/valorant",
      name: "valorant",
      component: () => import("../views/detailView/ValorantDetail.vue"),
    },
    {
      path: "/fifapc",
      name: "fifa pc",
      component: () => import("../views/detailView/FifaPcDetail.vue"),
    },
    {
      path: "/efootball",
      name: "efootball",
      component: () => import("../views/detailView/EFootballDetail.vue"),
    },
    {
      path: "/bgmi",
      name: "bgmi",
      component: () => import("../views/detailView/BgmiDetail.vue"),
    },
    {
      path: "/forza",
      name: "forzahorizon",
      component: () => import("../views/detailView/ForzaHorizonDetail.vue"),
    },
    {
      path: "/freefire",
      name: "freefire",
      component: () => import("../views/detailView/FreeFireDetail.vue"),
    },
  ],
});

export default router;
