import { createWebHistory, createRouter } from "vue-router";
import ShowsOverview from "../components/views/ShowsOverview.vue";
import ShowPage from "../components/views/ShowPage.vue";
import Filter from "../components/views/Filter.vue";

const routes = [
  {
    path: "/",
    name: "ShowsOverview",
    component: ShowsOverview,
  },
  {
    path: "/filter",
    name: "Filter",
    component: Filter,
  },
  {
    path: "/shows",
    name: "shows",
    component: ShowPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;