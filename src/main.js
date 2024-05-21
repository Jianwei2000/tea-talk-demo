import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'
import emitter from './methods/emitter'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import './assets/all.scss'

const app = createApp(App)

app.use(VueAxios, axios)
app.config.globalProperties.$http = axios
app.config.globalProperties.emitter = emitter
app.use(createPinia())
app.use(router)
app.use(bootstrap)

app.mount('#app')
