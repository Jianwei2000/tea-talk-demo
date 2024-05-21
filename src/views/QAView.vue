<template>
  <div class="container my-7">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/" class="fw-bold text-decoration-none"
            ><i class="bi bi-house-door-fill"></i> 首頁</RouterLink
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">常見問題</li>
      </ol>
    </nav>

    <h1 class="text-primary fw-bold fs-2 my-5 text-title">常見問題</h1>

    <div class="accordion shadow" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button bg-primary text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            下單後多久可以收到商品呢？
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            現貨商品下單完成後24H內出貨，加上物流時間約<code>3~5個工作天</code>可以收到您的商品。<br />
            預購商品下單完成後會在7天之內出貨，加上物流時間約<code>10~14個工作天</code>可以收到您的商品。
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            class="accordion-button collapsed bg-primary text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            茶具有鑑賞期限嗎?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            為保護消費者權益，商品皆有七天鑑賞期，辦理退換貨時請保持商品的完整性，如商品超過鑑賞期欲辦理退貨者，或是因人為因素造成商品受損，恕不受理，敬請見諒！
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button
            class="accordion-button collapsed bg-primary text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            有SGS認證嗎？
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body">有的，您可於SGS認證網頁查詢到關於我們的檢驗合格資料。</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFour">
          <button
            class="accordion-button collapsed bg-primary text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFour"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFour"
          >
            請問如果我要大量訂購 (數量遠超過庫存顯示)，要多久之前預訂？
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFour"
        >
          <div class="accordion-body">
            建議您至少提早 7 個工作天來電洽詢，但必須瞭解您的需求之後方能進行安排，我們會盡力安排。
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFive">
          <button
            class="accordion-button collapsed bg-primary text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFive"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFive"
          >
            有實體店面嗎？
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFive"
        >
          <div class="accordion-body">實體店面還在籌備中，目前僅開放網路平台下單。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.text-title {
  text-shadow: 1px 1px #d7ebb1;
}
</style>
