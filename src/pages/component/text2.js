import Vue from 'vue';

export const createText2 = (template) => {
    return {
        template:template,
        props:{
            test:String
        },
        mounted() {
            console.log(this);
        },
        data() {
            return {
                blanks:''
            }
        }
    }
};