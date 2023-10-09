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
          <li>
            <router-link to="/board/1"><h3>웃긴자료</h3></router-link>
          </li>
          <li>
            <router-link to="/board/2"><h3>자유게시판</h3></router-link>
          </li>
          <li>
            <router-link to="/board/3"><h3>음식게시판</h3></router-link>
          </li>
          <li>
            <router-link to="/board/4"><h3>MBTI 게시판</h3></router-link>
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
export default {
  name: "SideBar",
};
</script>
