<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  />
  <div class="side-bar p-3">
    <ul class="nav text-left fw-bolder">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/admin/products"
          ><i class="bi bi-box-seam"></i> 商品管理
        </RouterLink>
        <RouterLink class="nav-link" to="/admin/order">
          <i class="bi bi-list-check"></i> 訂單管理
        </RouterLink>
        <RouterLink class="nav-link" to="/admin/coupon"
          ><i class="bi bi-ticket-detailed"></i> 優惠碼管理
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.side-bar {
  height: 100vh;
  background-color: #f8f9fa;
  border: #dfe0e1 1px solid;
}
</style>
