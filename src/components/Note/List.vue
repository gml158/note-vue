<template>
    <div id="notecontainer">
    <ul>
      <li class="notelist" v-for="item in items" v-on:touchstart="startMove(item)">
          <h3 v-text="item.title"></h3>
          <div v-text="item.date"></div>
      </li>
    </ul>
    </div>
</template>
<script>
export default {
  data (){
      return {
          items:[
            {
                title:'回家吃鸡',
                date:'2018-03-28 19:00:00'
            },{
                title:'晨练',
                date:'2018-03-29 07:30:00'
            },
            {
                title:'回家吃鸡',
                date:'2018-03-28 19:00:00'
            },{
                title:'晨练',
                date:'2018-03-29 07:30:00'
            },
            {
                title:'回家吃鸡',
                date:'2018-03-28 19:00:00'
            },{
                title:'晨练',
                date:'2018-03-29 07:30:00'
            },
            {
                title:'回家吃鸡',
                date:'2018-03-28 19:00:00'
            },{
                title:'晨练',
                date:'2018-03-29 07:30:00'
            },{
                title:'回家吃鸡',
                date:'2018-03-28 19:00:00'
            },{
                title:'晨练',
                date:'2018-03-29 07:30:00'
            },{
                title:'回家吃鸡',
                date:'2018-03-28 19:00:00'
            },{
                title:'晨练',
                date:'2018-03-29 07:30:00'
            },{
                title:'回家吃鸡',
                date:'2018-03-28 19:00:00'
            },{
                title:'晨练',
                date:'2018-03-29 07:30:00'
            },{
                title:'回家吃鸡',
                date:'2018-03-28 19:00:00'
            },{
                title:'晨练',
                date:'2018-03-29 07:30:00'
            }
            ]
      }
  },
  methods:{
      startMove:function(item) {
          item.starttime = 'aaaaaaaa';
      }
  }
}
</script>
<style>
    #notecontainer{
        padding-top:10px;
        // padding-bottom:10px;
    }
    .notelist{
      padding-left:10px;
      width:100%; overflow:hidden;
      border-bottom:1px solid #05a066;
    }
    .notelist h3{
      line-height:30px;
      font-size:20px;
    }
    .notelist div{
      line-height:18px;
      font-size:10px;
    }
</style>