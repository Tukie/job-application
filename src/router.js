import { createRouter, createWebHistory } from "vue-router";
import page1Vue from "./page1.vue";
import page2Vue from "./page2.vue";
import page3Vue from "./page3.vue";
import page4Vue from "./page4.vue";
import page5Vue from "./page5.vue";
import page6Vue from "./page6.vue";
import page7Vue from "./page7.vue";
// import page6Vue from "./page6.vue";

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
      path: "/register",
      components: {
        default: page2Vue,
      },
    },
    {
      path: "/check",
      components: {
        default: page3Vue,
      },
    },
    {
      path: "/serch",
      components: {
        default: page4Vue,
      },
    },
    {
      path: "/serchMap",
      components: {
        default: page5Vue,
      },
    },
    {
      path: "/print",
      components: {
        default: page6Vue,
      },
    },
    {
      path: "/QA",
      components: {
        default: page7Vue,
      },
    },
  ],
});
