<template>
    <div>
        <h3> Detail Page  {{time}}</h3>
    </div>
</template>
<script>
import { ref } from "vue"
export default {
    setup(){
        let time = ref(new Date())
        return {
            time
        }
    }
}
</script>