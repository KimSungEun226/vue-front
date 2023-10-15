<template>
  <div style="margin-top: 15px">
    <div class="boardName">
      <h4>{{ categoryName }}</h4>
    </div>
    <div class="table-wrapper">
      <table v-if="boardsList.length > 0">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in boardsList" v-bind:key="item.id">
            <td>{{ idx + 1 }}</td>
            <td>
              <a @click="moveDetailPage(item.id)">{{ item.title }} </a>
            </td>
            <td>{{ item.createTime }}</td>
          </tr>
        </tbody>
      </table>
      <div class="noBoard" v-else>
        <h2>게시물이 존재하지 않습니다....</h2>
      </div>
      <div v-if="boardsList.length < totalCount" class="moreButton">
        <a
          @click="getMoreBoards"
          v-bind:disabled="moreProcessing"
          class="button"
          >더보기....</a
        >
      </div>
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
import { getBoards, getBoardCategoryName } from "../api/index";

export default {
  name: "ListComponent",
  data() {
    return {
      categoryId: "",
      categoryName: "",
      boardsList: [],
      page: 1,
      totalCount: 0,
      moreProcessing: false,
    };
  },
  async created() {
    this.categoryId = this.$route.params.id;
    let boardListResponse = await getBoards({
      categoryId: this.categoryId,
      size: 10,
      page: 0,
    });
    this.boardsList = boardListResponse.datas;
    this.totalCount = boardListResponse.totalPage;

    let categoryNameResponse = await getBoardCategoryName(this.categoryId);
    this.categoryName = categoryNameResponse.data.categoryName;
  },
  methods: {
    moveWritePage() {
      this.$router.push({
        path: "/write",
        query: { categoryId: this.categoryId },
      });
    },
    moveDetailPage(id) {
      this.$router.push({ path: "/detail/" + id });
    },
    async getMoreBoards() {
      this.moreProcessing = true;
      let boardListResponse = await getBoards({
        categoryId: this.categoryId,
        size: 10,
        page: this.page,
      });
      this.boardsList = this.boardsList.concat(boardListResponse.datas);
      this.page++;
      this.moreProcessing = false;
    },
  },
};
</script>

<style scoped>
.boardName {
  margin-bottom: 20px;
}
.noBoard {
  text-align: center;
}
.moreButton {
  text-align: center;
}
</style>
