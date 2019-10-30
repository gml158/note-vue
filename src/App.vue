<template>
<div id="app">
    <div class="view">
        <div class="slider" v-show="show">
            <router-link class="link" to="/canvas">Canvas</router-link>
            <router-link class="link" to="/cropper">VueCropper</router-link>
            <router-link class="link" to="/image">渐进式图片加载</router-link>
            <router-link class="link" to="/svg">SVG曲线变化</router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
        <div style="position:absolute; top:0; left:0; width:150px; height:50px; font-size:14px;" @click="changeShow">显示／隐藏</div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            show:true
        }
    },
    methods:{
        changeShow() {
            this.show = !this.show;
        }
    }
}
</script>
<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size:20px;
    text-align: center;
    color: #2c3e50;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.view {
    display: flex;
    width: 100%;
    height: 100%;
    
}
.slider {
    width: 150px;
    border-right: 1px solid #ccc;
    padding: 10px;
    padding-top:40px;
    color: blue;
    overflow-y: auto;
}
.link{
    display: block;
    text-align: left;
    font-size:20px;
    line-height: 1;
    margin-bottom:20px;
}
.router-link-active {
    color: #2c3e50;
}
.content{
    flex:1;
    padding:20px 0px 0px 50px;
    overflow: auto;
}
</style>
