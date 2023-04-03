import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn' //中文
import axios from 'axios'
import service from './service'
import echarts from 'echarts'
import * as Icons from '@element-plus/icons'

const app = createApp(App);
app.use(ElementPlus, {locale});
//注册Icons全局组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
});
app.config.globalProperties.$https = axios;
app.config.globalProperties.service = service;
app.config.globalProperties.$echarts = echarts;
app.use(router);
app.mount('#app');