<template>
  <div id="main">
    <div class="inner">
      <huibigo-header v-if="$route.path !== '/404'"></huibigo-header>
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
import HuibigoHeader from "../components/HuibigoHeader.vue";
export default {
  name: "MainPage",
  components: {
    HuibigoHeader,
  },
};
</script>
