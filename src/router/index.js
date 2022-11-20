import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta:{ title: 'Crossfire | Month of E-Sports' }
    },
    {
      path: "/valorant",
      name: "valorant",
      component: () => import("../views/detailView/ValorantDetail.vue"),
      meta:{title: 'Crossfire | Valorant'}
    },
    {
      path: "/fifapc",
      name: "fifa pc",
      component: () => import("../views/detailView/FifaPcDetail.vue"),
      meta:{ title: 'Crossfire | Fifa PC' }
    },
    {
      path: "/efootball",
      name: "efootball",
      component: () => import("../views/detailView/EFootballDetail.vue"),
      meta:{ title: 'Crossfire | E Football' }
    },
    {
      path: "/bgmi",
      name: "bgmi",
      component: () => import("../views/detailView/BgmiDetail.vue"),
      meta:{ title: 'Crossfire | BGMI' }
    },
    {
      path: "/forza",
      name: "forzahorizon",
      component: () => import("../views/detailView/ForzaHorizonDetail.vue"),
      meta:{ title: 'Crossfire | Forza Horizon' }
    },
    {
      path: "/freefire",
      name: "freefire",
      component: () => import("../views/detailView/FreeFireDetail.vue"),
      meta:{ title: 'Crossfire | Free Fire' }
    },
  ],
});

router.beforeEach((to)=>{
  document.title = to.meta.title
})

export default router;
