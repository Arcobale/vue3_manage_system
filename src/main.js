import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn' //中文
import axios from 'axios'

const app = createApp(App);
app.use(router);
app.use(ElementPlus, {locale});
app.config.globalProperties.$https = axios;
app.mount('#app');