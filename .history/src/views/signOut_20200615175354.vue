<template>
<!-- 退出系统 -->
 <div>
   <div class="expect">期待您的下次光临</div>
   <el-button type="primary" plain>确定退出</el-button>

 </div>
</template>

<script>
import axios from 'axios';

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
     getData(){
       axios.get('api/user/logout')
       .then(res =>{
         console.log(res.data)
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
.expect{
  margin-top: 150px;
  font-size: 20px;
  font-weight: 800;
}
.el-button{
  margin-top: 50px;
}
</style>