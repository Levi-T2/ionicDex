import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/dex",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/dex",
      },
      {
        path: "dex",
        component: () => import("@/views/DexPage.vue"),
      },
      {
        path: "search",
        component: () => import("@/views/SearchPage.vue"),
      },
      {
        path: "about",
        component: () => import("@/views/AboutPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
