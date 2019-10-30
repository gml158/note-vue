<template>
    <div>
        <span @click="clickA"> {{id}} </span>
    </div>
</template>
<script>
export default {
    data(){
        return {
            input:''
        }
    },
    props:{
        id:String
    },
    methods:{
        clickA() {
            console.log(this.$parent);
        }
    }
}
</script>
