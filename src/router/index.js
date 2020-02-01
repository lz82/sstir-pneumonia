import Vue from "vue";
import VueRouter from "vue-router";

import MainLayout from "@/layout/main";
import ListLayout from "@/layout/list";

import Home from "@/views/home";
import Protect from "@/views/protect";
import Analysis from "@/views/analysis";
import Study from "@/views/study";

import ListNews from "@/views/list/news";
import ListExpert from "@/views/list/expert";
import ListOrg from "@/views/list/org";
import ListPaper from "@/views/list/paper";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainLayout",
    component: MainLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: Home
      },
      {
        path: "/protect",
        name: "protect",
        component: Protect
      },
      {
        path: "/analysis",
        name: "analysis",
        component: Analysis
      },
      {
        path: "/study",
        name: "study",
        component: Study
      }
    ]
  },
  {
    path: "/list",
    name: "listLayout",
    component: ListLayout,
    children: [
      {
        path: "news/:type",
        name: "listNews",
        props: true,
        component: ListNews
      },
      {
        path: "expert/:type",
        name: "listExpert",
        props: true,
        component: ListExpert
      },
      {
        path: "org/:type",
        name: "listOrg",
        props: true,
        component: ListOrg
      },
      {
        path: "paper/:type",
        name: "listPaper",
        props: true,
        component: ListPaper
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
