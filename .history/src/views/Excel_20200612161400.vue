<template>
<!-- 导出excel -->
 <div>

   <el-table
      :data="tableData"
      style="width: 100%">
       <!-- 名称 -->
      <el-table-column
        prop="NAME"
        label="名称"
        width="400">
      </el-table-column>
      <!-- 商品编号 -->
      <el-table-column
        prop="GOODS_SERIAL_NUMBER"
        label="商品编号"
        width="180">
      </el-table-column>
      <!-- 原价 -->
      <el-table-column
        prop="ORI_PRICE"
        label="原价">
      </el-table-column>
      <!-- 现价 -->
      <el-table-column
        prop="PRESENT_PRICE"
        label="现价">
      </el-table-column>
    </el-table>
   

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
        tableData: [],
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

</style>