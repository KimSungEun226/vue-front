/* eslint-disable */
<template>
  <form method="post" action="#">
    <div class="row uniform">
      <div class="8u 12u$(xsmall)">
        <input
          type="text"
          name="demo-name"
          id="demo-name"
          value=""
          placeholder="제목"
          v-model="title"
        />
      </div>
      <!-- Break -->
      <div class="6u$">
        <div class="select-wrapper">
          <select name="demo-category" id="demo-category" v-model="category">
            <option value="">- Category -</option>
            <option value="1">웃긴자료</option>
            <option value="2">자유게시판</option>
            <option value="3">음식게시판</option>
          </select>
        </div>
      </div>

      <div>
        <textarea
          id="summernote"
          name="demo-message"
          placeholder="Enter your message"
          rows="6"
          v-model="content"
        ></textarea>
      </div>
      <!-- Break -->
      <div class="12u$">
        <ul class="actions">
          <li>
            <input
              @click="register"
              type="button"
              value="등록하기"
              class="special"
            />
          </li>
        </ul>
      </div>
    </div>
  </form>
</template>
<script>
import { createBoard } from "../api/index";
export default {
  name: "WritePage",
  data() {
    return {
      title: "",
      content: "",
      category: "",
    };
  },
  mounted() {
    $("#summernote").summernote({
      height: 300,
      width: 1200,
      lang: "ko-KR",
    });
  },
  methods: {
    async register() {
      let data = {
        title: this.title,
        content: $("#summernote").summernote("code"),
        category: this.category,
      };
      let code = await createBoard(data);

      if (code === 200) {
        if (!alert("등록되었읍니다..."))
          this.$router.replace({ path: "/board/1" });
      } else {
        if (!alert("등록실패,,,,")) this.$router.replace({ path: "/board/1" });
      }
    },
  },
};
</script>

<style></style>
