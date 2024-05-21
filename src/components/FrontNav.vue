<template>
  <nav class="navbar fixed-top navbar-expand-lg text-primary bg-white shadow">
    <div class="container-fluid">
      <RouterLink to="/" class="ms-3 navbar-brand dancing-script fs-2 fw-bold">Tea Talk</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-3" id="navbarNav">
        <ul class="navbar-nav fw-bold text-primary">
          <li class="nav-item">
            <RouterLink to="/products" class="nav-link">所有商品</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">關於我們</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">聯絡我們</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/qa" class="nav-link">常見問題</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
