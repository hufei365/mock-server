
import Project from "./index.vue"
import List from "./list/index.vue"
import Detail from "./detail/index.vue"



export default {
    path: "/project",
    component: Project,
    redirect: "/project/list",
    children: [
        //一个个对象
        { path: 'list', component: List },
        { path: 'detail', component: Detail }
    ]
}