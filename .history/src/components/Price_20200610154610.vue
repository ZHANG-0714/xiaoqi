<template>
<!-- 首页底部组件 -->
 <div>
     <div class="bottom">
         <!-- 订单 -->
         <el-card class="box-card">
             
         </el-card>
         <!-- 添加 -->
         <el-card class="box-cards">
             
         </el-card>
         <!-- 进度条 -->
         <el-card class="box-cardr">
             
         </el-card>
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
.bottom{
margin: 10px 15px;
display: flex;
}
.box-card{
    width: 500px;
    height: 400px;
}
.box-cards{
    width: 300px;
    height: 400px;
    margin-left: 10px;
}
.box-cardr{
    width: 200px;
    height: 400px;
    margin-left: 10px;
}

</style>