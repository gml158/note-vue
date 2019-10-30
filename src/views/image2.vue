<template>
    <div style="position: absolute;
        left: 0;
        top:0; right:0; bottom:0;
        overflow:hidden;
        ">
        <div :class="{'bgimg':true, 'bigBg':loaded}">
            <img ref="smallimg" :class="{'small':true, 'small_hide': loaded}" :src="smallimg" />
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            loaded:false,
            bigImg:require('@/assets/loginbg.jpg'),
            smallimg:require('@/assets/small.png'),
            imgClass:'small'
        }
    },
    created(){
        this.loadImg();
    },
    methods:{
        loadImg() {
            let imgObj = new Image();
            imgObj.src = this.bigImg;
            imgObj.onload = () => {
                this.loaded = true;
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .bgimg{
        position: relative;
        width:100%; height:100%;
        overflow: hidden;
        transform: scale(1.2);
        transform-origin: center center;
        background: url('~@/assets/loginbg.jpg') no-repeat 50%;
        transition: transform 1s;
        

        & img{
            position: absolute;
            top:50%;
            left:50%;
            margin-top:-800px; margin-left:-1280px;
            width:2560px;
            height:1600px;
        }
    }
    .bigBg{
        transform:scale(1);
    }
    .small{
        position: absolute;
        top:0; left:0;
        opacity: 1;
        transition: opacity .3s;
        
    }
    .small_hide{
        opacity: 0.2;
        
    }
</style>