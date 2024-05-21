<template>
  <div class="container my-5">
    <h1>商品列表</h1>
    <div class="text-end">
      <button class="btn btn-primary mb-4" type="button">建立新的商品</button>
    </div>
    <table class="table mb-4">
      <thead>
        <tr>
          <th>圖片</th>
          <th width="120">商品名稱</th>
          <th width="120">分類</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="width: 200px">
            <div style="height: 100px; background-size: cover; background-position: center"></div>
          </td>
          <td></td>
          <td></td>
          <td class="text-end"></td>
          <td class="text-end"></td>
          <td>
            <span class="text-success">啟用</span>
            <span class="text-danger">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <PaginationCom />
  </div>
</template>

<script setup>
import PaginationCom from '@/components/PaginationCom.vue'
import { onMounted } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

//const products = ref([])
//const pagination = ref({})

function checkLogin() {
  //取出token
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)TeaTalkToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
  axios.defaults.headers.common['Authorization'] = token
  axios.post(`${import.meta.env.VITE_APP_API}/v2/api/user/check`).then((res) => {
    console.log(res.data)
  })
}

function getProducts(page = 1) {
  axios
    .get(
      `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/products?page=${page}`
    )
    .then((res) => {
      if (res.data.success) {
        console.log(import.meta.env.VITE_APP_API)
        console.log(import.meta.env.VITE_APP_PATH)
        console.log(res.data)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'API連接失敗',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(res.data)
      }
    })
} /*
const getProducts = async (page = 1) => {
  const api = `${import.meta.env.VITE_APP_API}/v2/api/${import.meta.env.VITE_APP_PATH}/admin/products?page=${page}`
  console.log('API URL:', api) // Debug: 打印 API URL

  try {
    const res = await axios.get(api)
    console.log('API Response:', res.data) // Debug: 打印 API 响应数据

    if (res.data && res.data.success) {
      // 更新产品和分页数据
      products.value = res.data.products
      pagination.value = res.data.pagination
    } else {
      console.error('API response does not indicate success:', res.data)
    }
  } catch (error) {
    console.error('Failed to fetch products:', error)
  }
}
*/
// 在组件挂载时获取产品数据
onMounted(() => {
  checkLogin()
  getProducts()
})
</script>
