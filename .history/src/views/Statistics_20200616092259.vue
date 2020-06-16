<template>
<!-- 统计 -->
 <div>
   <div class="Statistics">
     <!-- 今日发布 -->
     <div class="today">
       <div>今日发布</div>
       <div>{{}}</div>
    </div>
    <!-- 原创文章 -->
     <div class="original">
       <div>原创文章</div>
       <div>{{}}</div>
     </div>
     <!-- 新留言 -->
     <div class="leaving">
        <div>新留言</div>
        <div>0</div>
    </div>
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
  height: 60px;
  display: flex;
}
.today{
  width: 25%;
  line-height: 35px;
  color: #fff;
  background: #7CCABF;
}
.original{
  width: 25%;
  line-height: 35px;
  color: #fff;
  background: #E88A87;
}
.leaving{
 width: 25%;
  line-height: 35px;
  color: #fff;
  background: #8375A3;
}
.news{
 width: 25%;
  line-height: 35px;
  color: #fff;
  background: #9FCEC1;
}
</style>