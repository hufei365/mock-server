<template>
    <div>
        <h3>Project List page</h3>
        <button class="blue-btn" @click="addProject">Add</button>
        <MTable >
             <template v-slot:thead>
            <thead>
                <tr><td>id</td> <td>Name</td></tr>
            </thead>
             </template>
             <template v-slot:tbody>
            <tbody>
                <tr v-for=" (project, index) of list" :key="index">
                    <td>{{project.id}}</td>
                    <td>{{project.name}}</td>
                </tr>
            </tbody>
             </template>
        </MTable>
    </div>
</template>
<script>
import  "../../../styles/btn.scss"
import { Get , Post } from "../../../fetch"
import MTable from "../../../components/ui/table.vue"
export default {
    components: {
        MTable
    },
    data(){
        return {
            list: []
        }
    },
    beforeCreate(){
        Get('/admin/project/list').then(d=>{
            console.log(d)
            this.list = d.list;
        })
    },
    methods: {
        addProject(){
            Post('/admin/project/add', {

            }).then(d=>{
                console.log("Add Success!!")
            })
        }
    }
}
</script>