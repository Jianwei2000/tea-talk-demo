<template>
  <DashboardNav />
  <div class="row gx-0">
    <div class="col-md-2">
      <DashboardSideBar />
    </div>
    <div class="col">
      <RouterView v-if="loginCheck" />
    </div>
  </div>
</template>

<script setup>
import DashboardNav from '@/components/backend/DashboardNav.vue'
import DashboardSideBar from '@/components/backend/DashboardSideBar.vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const loginCheck = ref(false)
const router = useRouter()

//取出token
const token = document.cookie.replace(/(?:(?:^|.*;\s*)TeaTalkToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
axios.defaults.headers.common['Authorization'] = token

onMounted(() => {
  //有token才做以下這件事
  if (token) {
    // 將api替換成登入驗證的路徑
    const api = `${import.meta.env.VITE_APP_API}/api/user/check`
    axios
      .post(api, { api_token: token })
      //token 沒過期，有身份進到後台，此時 router-view 將會出現
      .then(() => {
        loginCheck.value = true
      })
      .catch((error) => {
        console.error(error)
        Swal.fire({
          icon: 'error',
          title: '登入失敗',
          text: '請重新登入!'
        })
        router.push('/login')
      })
  } else {
    Swal.fire({
      icon: 'error',
      title: '登入失敗',
      text: '請重新登入!'
    }).then(() => {
      // 跳回登錄畫面
      router.push('/login')
    })
  }
})
</script>
