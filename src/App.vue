<template>
  <div id="app">
    <header>
      <h1 v-text="title"></h1>
    </header>
    <div class="center">
      <router-view></router-view>
    </div>
    <footer>
      <router-link to="/">列表</router-link>
      <router-link to="/note/create">创建</router-link>
      <router-link to="/manage/me">我</router-link>
    </footer>
  </div>
</template>
<script>
export default {
  data (){
    return {
      title:'H5本地记事本',
      footer:"footer"
    }
  },
  methods:{
    toggleFinish:function(item){
      item.isFinished = item.isFinished ? false: true;
      console.log(item);
    }
  }
}
</script>

<style>
  html{height:100%;}
  body,ul,li,h1,h2,h3{margin:0; padding:0;}
  body{
    background:#ccc;
  }
  header{
    position:fixed;
    top:0;
    display:flex;
    align-items:center;
    width:100%;height:60px;
    padding-left:10px;
    color:#fff;
    background:#4db790;
    border-bottom:1px solid #ccc;
  }
  .center{
    position:absolute;
    top:60px;bottom:30px;
    overflow-x:hidden;
    overflow-y:scroll;
    background:#fff;
    width:100%;
  }
  footer{
    position:fixed; bottom:0; width:100%; height:30px;
    display:flex;  align-items:center;
    border-top:1px solid #ccc;text-align:center; background:#fff;
  }
  footer>a{
    flex:1;
    color:#4db790;
    font-size:20px;font-weight:bolder;
    text-decoration:none;
  }
</style>
