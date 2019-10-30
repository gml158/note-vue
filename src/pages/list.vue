<template>
    <div>
        <span @click="switchCom">切换</span>
        <!-- <input type="text" v-model="currentIndex" />
        <span @click="switchCom">切换</span>
        <div v-for="(item, index) in componentList" :key="index">
            <component ref="com" :is="item.name" v-if="index < currentIndex" v-bind="propsdata"></component>
        </div> -->
        <div ref="content"></div>
        <q1 ref="www" type="eee"></q1>
    </div>
</template>

<script>
import Vue from 'vue';
    import Q1 from '../components/Q1.vue';
    import Q2 from '../components/Q2.vue';

    export default {
        name: "list",
        components:{
            Q1, Q2
        },
        data() {
            return {
                msg:'3333333333333333333333',
                propsdata:{},
                componentName:'',
                currentIndex:1,
                componentList:[
                    {
                        name:'Q1'
                    },
                    {
                        name:'Q1'
                    },
                    {
                        name:'Q2'
                    }
                ]
            }
        },
        mounted() {
            this.componentName = 'Q1';
            this.$nextTick( ()=> {
                this.$refs.content.innerHTML = `<div ref="eeeeeee" video="comp"></div>`;
                this.renderComp();
            })
        },
        methods:{
            switchCom() {
                // if(this.componentName == 'Q1') {
                //     this.propsdata = {type:'type'};

                //     this.componentName = 'Q2';
                //     return true;
                // }
                // if(this.componentName == 'Q2') {
                //     this.propsdata = {name:'gml', age:1};

                //     this.componentName = 'Q1';
                    
                //     return true;
                // }

                // console.log(this.$refs.www);
                console.log(this.$refs);
            },
            renderComp() {
                this.$nextTick(() => {
                    let $el = document.querySelector('[video=comp]');
                    // let create = this.$createElement;
                    // let a = create(Q1, {
                    //     attrs:{
                    //         name:'222',
                    //         age:333
                    //     },
                    //     ref:'eee'
                    // });
                    // console.log(a);
                    let a = new Vue({
                        render: (h) => {
                            let create = this.$createElement;
                            return create(Q1, {
                                attrs:{
                                    name:'222',
                                    age:333
                                },
                                ref:'eee'
                            })
                        },
                        el:$el
                    }).$mount();
                })
            },
        }
    }
</script>

<style scoped>
</style>