<template>
  <!-- 导出excel -->
  <div>
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      style="width: 100%"
    >
      <!-- 名称 -->
      <el-table-column prop="NAME" label="名称" width="450"></el-table-column>
      <!-- 商品编号 -->
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="200"></el-table-column>
      <!-- 原价 -->
      <el-table-column prop="ORI_PRICE" label="原价"></el-table-column>
      <!-- 现价 -->
      <el-table-column prop="PRESENT_PRICE" label="现价"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    ></el-pagination>
    <!-- 按钮 -->
    <div class="button">
      <!-- 导出excel -->
        <download-excel :data="tableData" :fields="json_fields" name="filename.xls" >
          <el-button type="primary">导出xls</el-button>
        </download-excel>        
     
        <download-excel :data="tableData" :fields="json_fields" name="filename.xls" type="csv">
          <el-button type="danger">导出csy</el-button>
        </download-excel> 

    </div>


  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
       json_fields: {
            '名称': 'NAME',
            '商品编号': 'GOODS_SERIAL_NUMBER',
            '原价': 'phone.ORI_PRICE',
            '现价': 'PRESENT_PRICE',
        },
      // Excel请求
      tableData: [],
      // 默认是第几页
      currentPage: 1,
      // 默认一页多少条
      pageSize: 10
    };
  },
  methods: {
    //  Excel请求
    getData() {
      axios
        .get("api/tableData")
        .then(res => {
          this.tableData = res.data.data;
          console.log(this.tableData);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //分页
    handleSizeChange(val) {
      this.pageSize = val;
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      // console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-pagination {
  text-align: left;
  margin-top: 20px;
}
.button {
  display: flex;
  justify-content: left;
}
.button div {
  margin-right: 20px;
  margin-top: 20px;
}
</style>