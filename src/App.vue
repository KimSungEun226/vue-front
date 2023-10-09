<template>
  <body id="app">
    <div id="wrapper">
      <index-page></index-page>
      <side-bar
        v-if="$route.path !== '/write' && $route.path !== '/404'"
      ></side-bar>
    </div>
  </body>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import IndexPage from "./views/IndexPage.vue";
export default {
  name: "app",
  components: {
    SideBar,
    IndexPage,
  },
};
</script>

<style></style>
