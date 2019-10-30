<template>
    <div>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                {{ item.name }}
                <a @click="submit(item.index)">修改</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[
                    {id:1, name: this.id + '---test'},
                    {id:1, name: this.id + '---test'},
                    {id:1, name: this.id + '---test'}
                ]
            }
        },
        computed: {
            leng() {
                return this.list.length;
            }
        },
        mounted() {
            console.log(this);
        },
        methods: {
            submit(index) {
                console.log(index);
            }
        }
    }
</script>

<style scoped>

</style>