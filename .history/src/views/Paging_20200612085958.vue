<template>
<!-- 分页表格 -->
 <div>
   <div>

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
       tableData:''  //分页表格请求
     }
   },
   methods: {
     getData(){
       axios.get('api/tableData')
       .then(res =>{
         this.tableData = res.data
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

</style>