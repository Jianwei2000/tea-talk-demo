<template>
  <loading :active="isLoading">
    <h4>載入中 請稍候...</h4>
  </loading>

  <button @click="test">測試</button>

  <PaginationCom />
</template>

<script setup>
//loading
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import PaginationCom from '@/components/PaginationCom.vue'
import { ref } from 'vue'

const isLoading = ref(false)

function test() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>

<style scoped></style>
