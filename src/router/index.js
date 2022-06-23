import { createMemoryHistory, createRouter } from "vue-router";
import ShowsOverview from "../components/views/ShowsOverview.vue";
import ShowPage from "../components/views/ShowPage.vue";

const routes = [
  {
    path: "/",
    name: "ShowsOverview",
    component: ShowsOverview,
  },
  {
    path: "/shows",
    name: "shows",
    component: ShowPage,
    props: true,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;