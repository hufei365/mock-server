import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/home/home.vue'
import List from '../pages/list/list.vue'
import Detail from '../pages/detail/detail.vue'
import Create from '../pages/create/create.vue'


const routerHistory = createWebHistory();

//创建路由对象并配置路由规则
export const router = createRouter({
    history: routerHistory,
    routes: [
        //一个个对象
        { path: '/', component: Home },
        { path: '/list', component: List },
        { path: '/detail', component: Detail },
        { path: '/create', component: Create }
    ]
})