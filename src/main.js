import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn' //中文
import axios from 'axios'
import service from './service'
import echarts from 'echarts'

const app = createApp(App);
app.use(ElementPlus, {locale});
app.config.globalProperties.$https = axios;
app.config.globalProperties.service = service;
app.config.globalProperties.$echarts = echarts;
app.use(router);
app.mount('#app');