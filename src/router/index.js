
import { createRouter, createWebHistory } from "vue-router";
import LandingScreen from "../views/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: 'LandingScreen',
      component: LandingScreen,
    },
    {
      path: "/test",
      component: () => import('../views/HomePage.vue')
    },
  
  ],
});

export default router;
