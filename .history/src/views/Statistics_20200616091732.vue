<template>
<!-- 统计 -->
 <div>
   <div class="Statistics">
     <div class="today">今日发布</div>
     <div class="original">原创文章</div>
     <div class="leaving">新留言</div>
     <div class="news">新消息</div>
   </div>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.Statistics{
  width: 100%;
  height: 50px;
  display: flex;
}
.today{
  width: 25%;
  line-height: 50px;
  background: #7CCABF;
}
.original{
  width: 25%;
  height: 100%;
  background: #E88A87;
}
.leaving{
 width: 25%;
  height: 100%;
  background: #8375A3;
}
.news{
 width: 25%;
  height: 100%;
  background: #9FCEC1;
}
</style>