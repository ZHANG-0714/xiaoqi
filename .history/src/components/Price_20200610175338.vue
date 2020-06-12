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

        <!-- <el-table :data="tableData" style="width: 100% " class='rowHead'>
          <el-table-column prop="num" label="Order_No" >{{}}</el-table-column>
          <el-table-column prop="price" label="Price" >{{}}</el-table-column>
          <el-table-column prop="status" label="Status">{{}}</el-table-column>
        </el-table>-->

        <el-table ref="filterTable" :data="tableData" style="width: 100%">
          <el-table-column
            prop="num"
            label="日期"
            sortable
            width="180"
            column-key="date"
            :filter-method="filterHandler"
          ></el-table-column>
          <el-table-column
            prop="price"
            label="标签"
            width="100"
            :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions
              >{{scope.row.tag}}</el-tag>
            </template>
          </el-table-column>
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
      tableData: [] //订单请求
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
  font-size: 12px;
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