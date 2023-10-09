<template>
  <div style="margin-top: 15px">
    <div class="boardName">
      <h4>웃긴자료</h4>
    </div>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in boardsList">
            <td>{{ idx + 1 }}</td>
            <td>
              <a @click="moveDetailPage(item.id)">{{ item.title }} </a>
            </td>
            <td>{{ item.createTime }}</td>
          </tr>
        </tbody>
      </table>
      <div align="right">
        <input
          type="button"
          value="글쓰기"
          rou
          class="special"
          @click="moveWritePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getBoards } from "../api/index";

export default {
  name: "ListComponent",
  data() {
    return {
      categoryId: "",
      boardsList: [],
    };
  },
  async created() {
    this.categoryId = this.$route.params.id;
    let response = await getBoards({ category: this.categoryId });
    this.boardsList = response.datas;
  },
  methods: {
    moveWritePage() {
      this.$router.push({
        name: "write",
        params: { categoryId: this.categoryId },
      });
    },
    moveDetailPage(id) {
      this.$router.push({ path: "/detail/" + id });
    },
  },
};
</script>

<style scoped>
.boardName {
  margin-bottom: 20px;
}
</style>
