<template>
  <div id="navBar">
    <div class="row">
      <div class="col-12 bg-color height"></div>
    </div>
    <div class="row">
      <div class="col-12 box-shadow">
        <b-navbar toggleable="lg" type="light" variant="white">
          <div>
            <img src="../../assets/img/fubonLoge.jpg">
          </div>
          <b-navbar-toggle v-show="getLoginSuccess" target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav v-show="getLoginSuccess" class="ml-auto">
                <b-nav-item href="#">首頁</b-nav-item>
                <b-nav-item href="#">要保基本資料作業</b-nav-item>
                <b-nav-item href="#">加退保申請及變更作業</b-nav-item>
                <b-nav-item href="#" active>查詢作業</b-nav-item>
                <b-nav-item href="#">理賠專區</b-nav-item>
                <b-nav-item href="#">文件申請作業</b-nav-item>
                <b-nav-item href="#"><b-icon icon="file-earmark" aria-hidden="true" font-scale="1"></b-icon></b-nav-item>
                <b-nav-item href="#"><b-icon icon="search" aria-hidden="true" font-scale="1"></b-icon></b-nav-item>
                <b-nav-item href="#"><b-icon icon="person-circle" aria-hidden="true" font-scale="2"></b-icon></b-nav-item>
              </b-navbar-nav>
            </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>
<script src="./NavBar"></script>
