<template>
  <div>
    <swiper>
      <swiper-slide class="swiper-slide">
        <div class="card border-width h-100">
          <RouterLink to="/product">
            <div class="swiper-slide-inner"></div>
          </RouterLink>
          <div class="card-body d-flex justify-content-between">
            <h2 class="product-title fw-bold"></h2>
            <p class="product-price fw-bold text-primary"></p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange
    }
  }
}
</script>
