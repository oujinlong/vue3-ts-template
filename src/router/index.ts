import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Redirect",
    redirect: {
      name: "Home",
    },
  },
  // 首页
  {
    path: "/home",
    name: "Home",
    component: () => import("@/pages/home/HomePage.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
