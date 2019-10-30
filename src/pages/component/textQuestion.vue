<template>
    <div>
        <component :is="component" :test="content">
            <input-text slot="input_1"></input-text>
            <input-text slot="input_2"></input-text>
            <input-text slot="input_3"></input-text>
        </component>
    </div>
</template>
<script>
// import Vue from 'vue';
import {createText2} from './text2.js';
import inputText from './text';
export default {
    props:{
        content:String
    },
    components:{
        Text2:createText2("<div><h1>333</h1></div>"),
        inputText},
    data(){
        return {
            test:'hahahhaahha ',
            component:'Text2'
        }
    },
    // directives:{
    //     'textinput':{
    //         update:function(el, bind, vnode) {
    //             console.log(vnode);
    //             // let a = Vue.extend({
    //             //     template:'<div>' + bind.test +'</div>',
    //             //     slots:bind.slots
    //             // });
    //             // (new a()).$mount(el);
    //         }
    //     }
    // },
    mounted() {
        console.log('texxtQuestion');
        // let h = this.$createElement;
        // console.log(this._self.h)
        
        // this.test = this.content.replace(/\{\{([0-9])\}\}/g, (a,b) => {
        //     return '<slot name="input_$1"></slot>';
        // })

        // this.$nextTick(() => {
        //     let refs = document.querySelectorAll('[slot]');

        //     refs.forEach(item => {
        //         let slotname = item.getAttribute('slot');
        //         console.log(Text);
        //         // Text.$mount(item);
        //         // new Vue({
        //         //     render:h => h(Text,{
        //         //         props:{
        //         //             id:slotname
        //         //         }
        //         //     }),
        //         // }).$mount(item);
        //     })
        // })

    }
}
</script>

