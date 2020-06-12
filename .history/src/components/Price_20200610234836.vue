<template>
  <!-- 首页底部组件 -->
  <div>
    <div class="public bottom">
      <!-- 订单 -->
      <el-card class="box-card public">
        <el-table ref="filterTable" :data="tableData" style="width: 100%">
          <!-- Order_No -->
          <el-table-column prop="num" label="Order_No"></el-table-column>
          <!-- Price -->
          <el-table-column prop="price" label="Price" align="center">
            <template slot-scope="scope">￥{{ scope.row.price }}</template>
          </el-table-column>
          <!-- Status -->
          <el-table-column prop="status" label="Status" align="center">
            <template slot-scope="scope">
              <el-tag type="success" v-if="scope.row.status === 1">success</el-tag>
              <el-tag type="danger" v-else>pending</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-card>

      <!-- 添加 -->
      <el-card class="box-cards"></el-card>
      <!-- 进度条 -->
      <el-card class="box-cardr public">
        <img
          class="wpimg"
          src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
          alt
        />
        <div class="cation">Vue</div>
        <el-progress :percentage="50"></el-progress>
        <div class="cation">Html</div>
        <el-progress :percentage="100" status="success"></el-progress>
        <div class="cation">Css</div>
        <el-progress :percentage="50"></el-progress>
        <div class="cation">JavaScript</div>
        <el-progress :percentage="50"></el-progress>
      </el-card>
      
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
      tableData: [], //订单请求
      cation:''  //进度条请求
    };
  },
  methods: {
       format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      },
    //订单请求
    getData() {
      axios
        .get("api/orderData")
        .then(res => {
          this.tableData = res.data.data;
        //  console.log(this.tableData);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //进度条请求
    getProgress(){
        axios
        .get('api/progress')
        .then(res =>{
            this.cation = res.data.data
            console.log(this.catch)
        })
        .catch(err =>{
            console.log(err)
        })
    }
  },
  mounted() {
    this.getData();
    this.getProgress()
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
.wpimg {
  width: 99%;
  margin-bottom: 20px;
}
.cation{
    text-align: left;
    margin-left: 8px;
}
.el-progress{
    text-align: left;
    margin: 13px 0;
}
</style>