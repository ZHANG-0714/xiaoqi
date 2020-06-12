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
      width="400">
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
      width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.ORI_PRICE }}</span>
      </template>
    </el-table-column>
  <!-- 现价 -->
    <el-table-column
      label="现价"
      width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE }}</span>
      </template>
    </el-table-column>
  <!-- 操作 -->
    <el-table-column label="操作" width="270">
      <template slot-scope="scope" >
        <el-button
          size="mini"
          type="primary"
          class="el-icon-edit"
          @click="handleEdit(scope.$index, scope.row)"> 修改</el-button>
        <el-button
          size="mini"
          type="danger"
          class="el-icon-delete"
          @click="handleDelete(scope.$index, scope.row)"> 删除</el-button>
      </template>
    </el-table-column>
  <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>

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
        //分页表格请求
        tableData: [],  
         // 默认是第几页
        currentPage4: 1,
        // 默认一页多少条
        pageSize: 10
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
   // 表格删除
     handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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