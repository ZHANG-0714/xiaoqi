<template>
<!-- 分页表格 -->
   
     <div class="paging">
       
     <el-input v-model="input" placeholder="请输入您想要输入的商品名称"></el-input>

    <el-card class="box-card">
     <el-table
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
          @click="dialogFormVisible = true"> 修改</el-button>
        <el-button
          size="mini"
          type="danger"
          class="el-icon-delete"
          @click="handleDelete(scope.$index, scope.row)"> 删除</el-button>
      </template>
    </el-table-column>

  </el-table>
  <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
    </el-card>
  <!--修改 弹框 -->
    <el-dialog :visible.sync="dialogFormVisible">

  <el-form :model="tableData">
    <!-- 名称 -->
    <el-form-item label="名称：" :label-width="formLabelWidth">
      <el-input v-model="tableData.row.NAME" autocomplete="off"></el-input>
    </el-form-item>
    <!-- 原价 -->
    <el-form-item label="原价：" :label-width="formLabelWidth">
      <el-input v-model="tableData.ORI_PRICE" autocomplete="off"></el-input>
    </el-form-item>
    <!-- 现价 -->
    <el-form-item label="现价：" :label-width="formLabelWidth">
      <el-input v-model="tableData.PRESENT_PRICE" autocomplete="off"></el-input>
    </el-form-item>
    
  </el-form>

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
    
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
        dialogFormVisible: false,
        formLabelWidth: '70px',
        // form: {
        //   name: '',
        //   original: '',
        //   present: '',
         
          
        // },
        //分页表格请求
        tableData: [],  
         // 默认是第几页
        currentPage: 1,
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
        this.pageSize = val
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val
        // console.log(`当前页: ${val}`);
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
  width: 400px;
  position: absolute;
  left: 20px;
}
.paging{
  width: 99%;
  position: relative;
}
.el-card{
  position: absolute;
  top: 60px;
  left: 20px;
}
</style>