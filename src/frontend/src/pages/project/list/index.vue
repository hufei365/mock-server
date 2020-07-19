<template>
    <div>
        <h3>Project List page</h3>
        <MButton @click="addProject">Add</MButton>
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
import { Get , Post } from "../../../fetch"
import MTable from "../../../components/ui/table.vue"
import MButton from "../../../components/ui/button.vue"
export default {
    components: {
        MTable,
        MButton
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