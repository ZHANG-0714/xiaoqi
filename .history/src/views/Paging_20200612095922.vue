<template>
<!-- 分页表格 -->

   <div class="paging">
     <el-input v-model="input" placeholder="请输入您想要输入的商品名称"></el-input>

     <el-table
    :data="tableData"
    style="width: 100%">
  <!-- 名称 -->
    <el-table-column
      label="名称"
      width="300">
      <template slot-scope="scope">
        <span style="margin-left: 20px">{{ scope.row.NAME }}</span>
      </template>
    </el-table-column>
  <!-- 商品编号 -->
    <el-table-column
      label="商品编号"
      width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER }}</span>
      </template>
    </el-table-column>
  <!-- 原价 -->
    <el-table-column
      label="原价"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.ORI_PRICE }}</span>
      </template>
    </el-table-column>
  <!-- 现价 -->
    <el-table-column
      label="现价"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
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
        input: '',
        tableData: []  //分页表格请求
     }
   },
   methods: {
  //分页表格请求
     getData(){
       axios.get('api/tableData')
       .then(res =>{
         this.tableData = res.data.data
         console.log(this.tableData)
       })
       .catch(err =>{
         console.log(err)
       })
     },
  //  表格删除
     handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
.el-table{
  position: absolute;
  top: 60px;
  left: 20px;
}

</style>