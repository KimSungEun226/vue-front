<template>
  <div>
    <h2>{{ board.title }}</h2>
    <h3>작성자</h3>
    <h4>게시판 종류</h4>
    <hr />
    <div v-html="board.content"></div>
  </div>
</template>

<script>
import { getBoard } from "../api/index";

export default {
  name: "DetailComponent",
  data() {
    return {
      id: "",
      board: {},
    };
  },
  async created() {
    this.id = this.$route.params.id;
    let response = await getBoard(parseInt(this.id));
    this.board = response.data;
  },
  methods: {},
};
</script>

<style></style>
