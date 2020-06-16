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
  width: 99%;
  display: flex;
}
.today{
  height: 30px;
  background: #7CCABF;
}
.original{
  height: 30px;
  background: #E88A87;
}
.leaving{
 height: 30px;
  background: #8375A3;
}
.news{
 height: 30px;
  background: #9FCEC1;
}
</style>