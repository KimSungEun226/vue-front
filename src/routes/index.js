import Vue from "vue";
import VueRouter from "vue-router";
import MainBanner from "../components/MainBanner";
import ListComponent from "../components/ListComponent";
import DetailComponenet from "../components/DetailComponent";
import WritePage from "../views/WritePage";
import ErrorPage from "../components/ErrorPage";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/main",
      component: MainBanner,
    },
    {
      path: "/board/:id",
      component: ListComponent,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailComponenet,
    },
    {
      path: "/write",
      name: "write",
      component: WritePage,
    },
    {
      path: "/404",
      component: ErrorPage,
    },
    {
      path: "/*",
      redirect: "/404",
    },
  ],
});
