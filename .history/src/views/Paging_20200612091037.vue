<template>
<!-- 分页表格 -->
 <div>
   <div class="paging">
     <el-input v-model="input" placeholder="请输入您想要输入的商品名称"></el-input>

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
       tableData:'',  //分页表格请求
        input: ''
     }
   },
   methods: {
     getData(){
       axios.get('api/tableData')
       .then(res =>{
         this.tableData = res.data.data
         console.log(this.tableData)
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
.el-input{
  width: 30%;
  text-align: left;
  position: absolute;
  left: 20px;
}
.paging{
  width: 99%;
  position: relative;

}

</style>