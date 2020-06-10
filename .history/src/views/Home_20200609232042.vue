<template>
<!-- 首页 -->

 <div>
   <div class="el--input--width admin">
     <el-card class="box-card">
       <img src="../assets/人员管理.svg" alt="" class="personnel">
     </el-card>

     <el-card class="box-card">
       <img src="../assets/人员管理.svg" alt="" class="personnel">
     </el-card>

     <el-card class="box-card">
       <img src="../assets/人员管理.svg" alt="" class="personnel">
     </el-card>

     <el-card class="box-card">
       <img src="../assets/人员管理.svg" alt="" class="personnel">
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
.admin{
  display: flex;
}
.box-card{
  width: 300px;
  height: 80px;
  margin-left: 20px;
  // flex: 1;
}
.personnel{
  width: 50px;
  color: #5DCFCD;
}


</style>