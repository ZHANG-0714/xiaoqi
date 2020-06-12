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
    <!-- 雷达图 -->
    <div class="charts">
      <div>
        <el-card class="box-cardr">
          <ve-radar :data="radarChat" :settings="chartSettingr"></ve-radar>
        </el-card>
      </div>
      <!-- 饼图 -->
      <div>
        <el-card class="box-cardr">
          <ve-ring :data="ringChat" :settings="chartSettingc"></ve-ring>
        </el-card>
      </div>
      <!-- 柱状图 -->
      <div>
        <el-card class="box-cardr">
          <ve-histogram :data="homeChats" :settings="chartSettings"></ve-histogram>
        </el-card>
      </div>
    </div>
    <!-- 首页底部组件 -->
    <Price></Price>

  </div>
</template>

<script>
import axios from "axios";
import countTo from "vue-count-to";
import Price from "../components/Price"

export default {
  name: "",
  components: {
    Price,
    countTo
  },
  props: {},
  data() {
    this.chartSettings = {
      metrics: ["expected", "actual"],
      dimension: ["date"]
    };
    this.chartSettingr = {
      dimension: ["name"],
      metrics: ["delelopmer", "marketing", "ministration", "sales", "techology"]
    };
    this.chartSettingc = {
        roseType: 'radius'
      }
    this.chartSettings = {
        metrics: ['expected', 'actual'],
        dimension: ['date']
      }
    return {
      odj: "", //计数器请求
      startVal: 0,
      //折线图请求
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: []
      },
      // 雷达图请求
      radarChat: {
        columns: [
          "name",
          "sales",
          "ministration",
          "techology",
          "delelopmer",
          "marketing"
        ],
        rows: []
      },
      // 饼图请求
      ringChat: {
          columns: ['name', 'data'],
          rows: []
        },
      // 柱状图请求
      homeChats: {
          columns: ["date", "expected", "actual"],
          rows: []
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
    gethomeChat() {
      axios
        .get("api/homeChat")
        .then(res => {
          this.chartData.rows = res.data.data;
          // console.log(this.chartData)
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 雷达图请求
    getradarChat() {
      axios
        .get("api/radarChat")
        .then(res => {
          this.radarChat.rows = res.data.data;
          // console.log(this.radarChat.rows);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 饼图请求
    getringChat(){
      axios
        .get("api/ringChat")
        .then(res => {
          this.ringChat.rows = res.data.data;
          // console.log(this.ringChat);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 柱状图请求
    gethomeChats(){
      axios
        .get("api/homeChat")
        .then(res => {
          this.homeChats.rows = res.data.data;
          // console.log(this.homeChats);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.gethomeChat();
    this.getradarChat();
    this.getringChat();
    this.gethomeChats()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.admin {
  display: flex;
}
.box-card {
  width: 300px;
  height: 90px;
  margin: 10px 15px;
  position: relative;
}
.box-cards {
  margin: 10px 15px;
}
.box-cardr {
  width:400px;
  height: 380px;
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
  top: 25px;
}
.count {
  position: absolute;
  right: 50px;
  top: 50px;
}
.charts{
  display: flex;
}
</style>