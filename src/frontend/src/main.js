import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {router } from './routers'

const app = createApp(App);
app.use(router); //挂载属性

app.mount('#app')
