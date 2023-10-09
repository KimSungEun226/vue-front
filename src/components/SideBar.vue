<template>
  <div id="sidebar">
    <div class="inner">
      <!-- Menu -->
      <nav id="menu">
        <header class="major">
          <h2>Menu</h2>
        </header>
        <ul>
          <li>
            <router-link to="/main"><h3>휘비고메인</h3></router-link>
          </li>
          <li v-for="item in boardCategoryList" v-bind:key="item.categoryId">
            <h3>
              <a @click="moveListPage(item.categoryId, item.categoryName)">{{
                item.categoryName
              }}</a>
            </h3>
          </li>
        </ul>
      </nav>

      <section>
        <header class="major">
          <h2>Get in touch</h2>
        </header>
        <p>안녕하세요..</p>
        <ul class="contact">
          <li class="fa-envelope-o"><a href="#">04dkwjtl@gmail.com</a></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { getBoardCategories } from "../api/index";

export default {
  name: "SideBar",
  data() {
    return {
      boardCategoryList: [],
      categoryId: "",
    };
  },
  async created() {
    let response = await getBoardCategories();
    this.boardCategoryList = response.datas;
  },
  methods: {
    moveListPage(categoryId) {
      if (this.$route.path.split("/")[2] != categoryId)
        this.$router.push({ path: "/board/" + categoryId });
    },
  },
};
</script>
