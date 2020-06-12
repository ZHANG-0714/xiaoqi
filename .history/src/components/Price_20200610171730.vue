<template>
  <!-- 首页底部组件 -->
  <div>
    <div class="public bottom">
      <!-- 订单 -->
      <el-card class="box-card public">
        <!-- <div class="order">
          <div>Order_No</div>
          <div>Price</div>
          <div>Status</div>
        </div>-->

        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Order_No"></el-table-column>
          <el-table-column prop="name" label="Price"></el-table-column>
          <el-table-column prop="address" label="Status"></el-table-column>
        </el-table>
      </el-card>
      <!-- 添加 -->
      <el-card class="box-cards"></el-card>
      <!-- 进度条 -->
      <el-card class="box-cardr"></el-card>
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
      order: "", //订单请求

      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    //订单请求
    getData() {
      axios
        .get("api/orderData")
        .then(res => {
          this.tableData = res.data.data;
          console.log(this.tableData);
        })
        .catch(err => {
          console.log(err);
        });
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
.bottom {
  margin: 10px 15px;
  display: flex;
}
.box-card {
  width: 600px;
}
.box-cards {
  width: 350px;
  height: 400px;
  margin-left: 10px;
}
.box-cardr {
  width: 300px;
  height: 400px;
  margin-left: 10px;
}
.rowHead {
  th,
  td {
    height: 40px !important;
  }
}
</style>