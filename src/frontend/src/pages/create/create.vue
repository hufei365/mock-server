<template>
    <div class="">
        <h3> Add api </h3>
        <form>
            <label for="method">Method:</label>
            <select name="method" v-model="params.method">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="OPTION">OPTION</option>
            </select>

            <label for="path">Path:</label>
            <input name="path" type="text" v-model="params.path" max=100 min=0 />
        </form>
        <button @click="doAdd"> ADD </button>

        <input type="file" ref="file">
    </div>
</template>

<script>
import { Post } from "../../fetch"

export default {
    data(){
        return {
            params: {
                method: "GET",
                path: "",
                params: [{
                    name: "",
                    type: "",
                    description: "",

                }]
            }
        }
    },
    mounted(){
        this.$refs.file.addEventListener('change', e=>{
            var formData = new FormData();
            formData.append('username', 'abc123');
            formData.append('avatar', e.currentTarget.files[0]);
            this.uploadFile( formData )
        })
    },
    methods: {
        uploadFile(formdata){
            fetch('/admin/upload_file', {
                method:"POST",
                body: formdata
            }).then(d=>{
                d.json().then(d=>{
                    console.log(d)
                })
            })
        },

        doAdd(){
            Post('/admin/add_api', this.params).then(d=>{
                console.log('Add OK ')
                this.params
            }).finally(e=>{
                console.log(e)
            })
        }
    }
}
</script>