<template>
    <div>
        1111111{{name}}:{{age}}
    </div>
</template>
<script>
    export default{
        name:'aaa',
        props:{
            name:String,
            age:Number
        },
        updated() {
            console.log(this.$props);
        }
    }
</script>