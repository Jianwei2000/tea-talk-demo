<script setup>
// 使用 ES 模組的導入語法來導入圖片
import banner from '@/assets/images/banner.jpg'
import tea from '@/assets/images/tea.jpg'
import teaBag from '@/assets/images/teaBag.jpg'
import teaSet from '@/assets/images/teaSet.jpg'
</script>

<template>
  <!--banner-->
  <div class="banner my-5 position-relative" :style="{ 'background-image': 'url(' + banner + ')' }">
    <div class="position-absolute start-50 top-50 translate-middle text-white banner-title">
      <h1 class="title dancing-script">Tea Talk</h1>
      <p class="fs-6 mt-3">喝茶是學問、更是藝術。與您一同品嘗茶．物語</p>
    </div>
    <RouterLink to="/products">
      <button
        type="button"
        class="cta-btn btn fs-5 text-white border-white border-3 rounded-3 px-4 position-absolute start-50 translate-middle"
      >
        開始品茶!
      </button>
    </RouterLink>
  </div>

  <!--介紹-->
  <div class="container mt-6">
    <div class="row">
      <!--茶葉-->
      <div class="d-flex flex-column justify-content-center align-items-center col-md-6">
        <h2 class="fs-2 text-primary fw-bold text-title">
          茶葉 <span class="fs-5 dancing-script">Tea</span>
        </h2>
        <h3 class="text-dark lh-lg my-3 fs-6 text-space">
          豐富多元的茶樹品種，<br />
          得天獨厚的生長環境，<br />
          百年來與時並進的製茶工藝。
        </h3>
      </div>
      <div
        class="category-img shadow col-md-6 mb-5"
        :style="{ 'background-image': 'url(' + tea + ')' }"
      ></div>
      <!--茶包-->
      <div class="d-md-flex flex-md-row-reverse">
        <div class="d-flex flex-column justify-content-center align-items-center col-md-6">
          <h2 class="fs-2 text-primary fw-bold text-title">
            茶包 <span class="fs-5 dancing-script">Tea Bag</span>
          </h2>
          <h3 class="text-dark lh-lg my-3 fs-6 text-space">
            生活前行，風味隨行，<br />
            為每一天注入滿滿正能量。
          </h3>
        </div>
        <div
          class="category-img shadow col-md-6 mb-5"
          :style="{ 'background-image': 'url(' + teaBag + ')' }"
        ></div>
      </div>

      <!--茶具-->
      <div class="d-flex flex-column justify-content-center align-items-center col-md-6">
        <h2 class="fs-2 text-primary fw-bold text-title">
          茶具 <span class="fs-5 dancing-script">Tea Set</span>
        </h2>
        <h3 class="text-dark lh-lg my-3 fs-6 text-space">
          極佳品質，輕鬆上手，<br />
          泡一杯茶不再是難事，<br />
          讓你的品茶饗宴更襯完美。
        </h3>
      </div>

      <div
        class="category-img shadow col-md-6 mb-5"
        :style="{ 'background-image': 'url(' + teaSet + ')' }"
      ></div>
    </div>
  </div>

  <!-- 精選推薦 輪播 -->
  <div class="container my-6 products-selected">
    <h2 class="fs-2 text-primary fw-bold mb-4 text-title">
      精選推薦 <span class="fs-5 dancing-script">Selected</span>
    </h2>
    <RandomSwiper />
    <div class="text-center mt-4 my-sm-5">
      <RouterLink
        class="see-more fs-6 bg-primary text-white d-inline-block py-3 rounded-3"
        to="/products"
        >查看更多</RouterLink
      >
    </div>
  </div>
</template>

<style>
.text-space {
  letter-spacing: 1px;
}
.banner {
  height: calc(100vh - 200px);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
}
.title {
  font-size: 80px;
  font-weight: 600;
  text-align: center;
}
.cta-btn {
  top: 64%;
}
.see-more {
  letter-spacing: 5px;
  padding-left: 30px;
  padding-right: 30px;
}
.category-img {
  height: 25rem;
  border-radius: 1rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.text-title {
  text-shadow: 1px 1px #d7ebb1;
}
@media (max-width: 576px) {
  .title {
    font-size: 50px;
  }
  .cta-btn {
    top: 70%;
  }
}
</style>
