import { createRouter, createWebHistory } from "vue-router";
import page1Vue from "./page1.vue";
import page2Vue from "./page2.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      components: {
        default: page1Vue,
      },
    },
    {
      path: "/page2",
      components: {
        default: page2Vue,
      },
    },
  ],
});
