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
import axios from "axios";

 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         order:''  //订单请求
     }
   },
   methods: {
    //订单请求
       getData(){
           axios.get('api/orderData')
           .then(res =>{
               this.order = res.data.data
               console.log(this.order)
           })
           .catch(err =>{
               console.log(err)
           })
       }
   },
   mounted() {
       this.getData()

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
    width: 600px;
    height: 400px;
}
.box-cards{
    width: 350px;
    height: 400px;
    margin-left: 10px;
}
.box-cardr{
    width: 300px;
    height: 400px;
    margin-left: 10px;
}

</style>