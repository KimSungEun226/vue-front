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
          <select name="demo-category" id="demo-category" v-model="categoryId">
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
          <li><input @click="moveListPage" type="button" value="목록" /></li>
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
      categoryId: "",
    };
  },
  created() {
    this.categoryId = this.$route.query.categoryId;
  },
  mounted() {
    $("#summernote").summernote({
      height: 300,
      width: 1200,
      lang: "ko-KR",
      toolbar: [
        // [groupName, [list of button]]
        ["fontname", ["fontname"]],
        ["fontsize", ["fontsize"]],
        ["style", ["bold", "italic", "underline", "strikethrough", "clear"]],
        ["color", ["forecolor", "color"]],
        ["table", ["table"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["height", ["height"]],
        ["insert", ["picture", "link", "video"]],
        ["view", ["fullscreen", "codeview", "help"]],
      ],
      fontNames: [
        "Arial",
        "Arial Black",
        "Comic Sans MS",
        "Courier New",
        "맑은 고딕",
        "궁서",
        "굴림체",
        "굴림",
        "돋움체",
        "바탕체",
      ],
      fontSizes: [
        "8",
        "9",
        "10",
        "11",
        "12",
        "14",
        "16",
        "18",
        "20",
        "22",
        "24",
        "28",
        "30",
        "36",
        "50",
        "72",
      ],
    });
  },
  methods: {
    async register() {
      let data = {
        title: this.title,
        content: $("#summernote").summernote("code"),
        category: {
          categoryId: this.categoryId,
        },
      };
      let code = await createBoard(data);

      if (code === 200) {
        this.$alert(null, "등록되었읍니다...", "success").then(() => {
          this.$router.replace({ path: "/board/" + this.categoryId });
        });
      } else {
        this.$alert(null, "등록실패,,,", "success").then(() => {
          this.$router.replace({ path: "/board/" + this.categoryId });
        });
      }
    },
    moveListPage() {
      this.$router.push({ path: "/board/" + this.$route.query.categoryId });
    },
  },
};
</script>

<style></style>
