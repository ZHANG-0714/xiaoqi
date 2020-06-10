<template>
  <!-- 首页 -->

  <div>
 <!-- 计数器 -->
    <div class="el--input--width admin">
 <!-- 人员管理 New Visits -->
      <el-card class="box-card">
        <div class="new">
          <img src="../assets/人员管理.svg" alt class="personnel" />
          <div>
            <div class="visits">New Visits</div>
            <div class="count">
              <countTo :startVal="startVal" :endVal="odj.visits" :duration="3000"></countTo>
            </div>
          </div>
        </div>
      </el-card>
<!-- Messages 短信管理 -->
      <el-card class="box-card">
        <div class="new">
          <img src="../assets/短信管理.svg" alt class="personnel" />
          <div>
            <div class="visits">Messages</div>
            <div class="count">
              <countTo :startVal="startVal" :endVal="odj.messages" :duration="3000"></countTo>
            </div>
          </div>
        </div>
      </el-card>
<!-- Purchases 钱 -->
      <el-card class="box-card">
        <div class="new">
          <img src="../assets/钱.svg" alt class="personnel" />
          <div>
            <div class="visits">Purchases</div>
            <div class="count">
              <countTo :startVal="startVal" :endVal="odj.purchases" :duration="3000"></countTo>
            </div>
          </div>
        </div>
      </el-card>
<!-- Shoppings 购物车 -->
      <el-card class="box-card">
        <div class="new">
          <img src="../assets/购物车.svg" alt class="personnel" />
          <div>
            <div class="visits">Shoppings</div>
            <div class="count">
              <countTo :startVal="startVal" :endVal="odj.shopping" :duration="3000"></countTo>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <!-- 折线图 -->
    <div>
      <el-card class="box-cards">
        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
      </el-card>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import countTo from "vue-count-to";

export default {
  name: "",
  components: {
    countTo
  },
  props: {},
  data() {
    this.chartSettings = {
        metrics: ['expected', 'actual'],
        dimension: ['日期']
      }
    return {
      odj: "",  //计数器请求
      startVal: 0,
  //折线图请求
      chartData: {   
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }]
        }
    };
  },
  methods: {

    //计数器请求
    getData() {
      axios
        .get("api/homeData")
        .then(res => {
          this.odj = res.data.data;
          // console.log(this.odj);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 折线图请求
    gethomeChat(){
      axios
      .get('api/homeChat')
      .then(res =>{
        // this.chartData = res.data.data
        console.log(this.chartData)
      })
      .catch(err =>{
        console.log(err)
      })
    }

  },
  mounted() {
    this.getData();
    this.gethomeChat();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.admin {
  display: flex
}
.box-card {
  width: 300px;
  height: 90px;
  margin: 10px 15px;
  position: relative;
}
.box-cards{
   margin: 10px 15px;
}
.personnel {
  width: 50px;
  color: #5dcfcd;
  position: absolute;
  left: 35px;
  top: 15px;
}
.new {
  display: flex;
}
.visits {
  position: absolute;
  right: 35px;
  top: -55px;
}
.count {
  position: absolute;
  right: 50px;
  top: -30px;
}
</style>