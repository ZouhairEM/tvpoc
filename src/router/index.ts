import { createRouter, createWebHistory } from 'vue-router'
import ShowsOverview from "../views/ShowsOverview.vue";
import ShowPage from "../views/ShowPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ShowsOverview',
      component: ShowsOverview
    },
    {
      path: "/shows",
      name: "shows",
      component: ShowPage
    },    
  ]
})

export default router
