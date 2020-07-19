<template>
    <div class="api-list">
        <a href="/create"> Add API </a>
        <table>
            <thead>
                <tr>
                    <td>Method</td>
                    <td>Path</td>
                    <td>Params</td>
                    <td>Response</td>
                    <td>Description</td>
                    <td>Group</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(api, index) of apis" :key="index">
                    <td>{{api.method}}</td>
                    <td>{{api.path}}</td>
                    <td>{{api.params}}</td>
                    <td>{{api.response}}</td>
                    <td>{{api.description}}</td>
                    <td>{{api.groupName}}</td>
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
        Get('/admin/apis', {}).then(data=>{
            console.log(data)
            this.apis = data
        }).finally(d=>{
            console.log('finally, ', d)
        })
    }
}
</script>

<style>
.api-list table{
    width: 100%;
}
</style>