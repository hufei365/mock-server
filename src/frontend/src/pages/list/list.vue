<template>
    <div class="api-list">
        <table>
            <thead>
                <tr>
                    <td>Method</td>
                    <td>Path</td>
                    <td>params</td>
                    <td>response</td>
                    <td>description</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(api, index) of apis" :key="index">
                    <td>{{api.method}}</td>
                    <td>{{api.path}}</td>
                    <td>{{api.params}}</td>
                    <td>{{api.response}}</td>
                    <td>{{api.description}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {Get}  from '../../fetch'
export default {
    data(){
        return {
            apis: []
        }
    },
    created(){
        Get('/admin/apis', {}).then((data)=>{
            this.apis = data.list
        })
    }
}
</script>