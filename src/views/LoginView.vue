<template>
  <div class="container my-10">
    <loading :active="isLoading">
      <h4>載入中 請稍候...</h4>
    </loading>
    <!-- @submit.prevent 阻止表單送出 加上 @submit.prevent 後畫面不會重新載入 -->
    <form class="row justify-content-center" @submit.prevent="signIn()">
      <div class="col-md-3">
        <h1 class="h3 mb-3 fw-bold text-center">後台登入</h1>
        <div class="mb-2">
          <label for="username" class="sr-only"><span class="text-danger">*</span>帳號</label>
          <input
            type="email"
            id="username"
            class="form-control"
            placeholder="email"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="password" class="sr-only"><span class="text-danger">*</span>密碼</label>
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>
        <div class="text-end">
          <button class="btn btn-lg btn-dark btn-block my-4" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
//loading
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoading = ref(false)

const user = ref({
  username: '',
  password: ''
})

function signIn() {
  //載入狀態
  isLoading.value = true
  console.log('login')
  const api = `${import.meta.env.VITE_APP_API}admin/signin`

  // 使用axios發送POST請求
  axios.post(api, user.value).then((res) => {
    if (res.data.success) {
      // 取得token & expired
      const { token, expired } = res.data
      console.log(token, expired)
      // 儲存cookie
      document.cookie = `TeaTalkToken=${token}; expired=${new Date(expired)}`
      console.log(res)
      // 轉址到 dashboard
      router.push('/admin/products')
      Swal.fire({
        icon: 'success',
        title: '登入成功',
        showConfirmButton: false,
        timer: 2000
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: '登入失敗',
        text: '請重新登入!'
      })
    }
  })
  isLoading.value = false
}
</script>
