// 入口：挂载应用，注册全局导航插件并启用 vue-router。
import './assets/main.css'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 
import OrangeTopNav from './components/OrangeTopNav/index.vue'
import bottomNav from './components/bottomNav/bottomNav.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
const syncArcoTheme = () => {
  document.body.setAttribute('arco-theme', colorScheme.matches ? 'dark' : 'light')
}

syncArcoTheme()
colorScheme.addEventListener('change', syncArcoTheme)

const app = createApp(App)

app.use(createPinia())
app.component('OrangeTopNav', OrangeTopNav)
app.component('bottomNav', bottomNav)
app.use(router)
app.use(ArcoVue);
app.use(ElementPlus)
app.mount('#app')
