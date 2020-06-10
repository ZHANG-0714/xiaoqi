<template>
  <!-- 首页 -->

  <div>
    <div class="el--input--width admin">
      <!-- 人员管理 New Visits -->
      <el-card class="box-card">
        <div class="new">
          <img src="../assets/人员管理.svg" alt class="personnel" />
          <div>
            <div class="visits">New Visits</div>
            <div class="count">
               <countTo :startVal='startVal' :endVal='count.visits' :duration='3000'></countTo>
            </div>
          </div>
        </div>
      </el-card>

      <el-card class="box-card">
        <div class="new">
          <img src="../assets/短信管理.svg" alt class="personnel" />
          <div>
            <div class="visits">Messages</div>
            <div class="count">{{}}</div>
          </div>
        </div>
      </el-card>

      <el-card class="box-card">
        <div class="new">
          <img src="../assets/钱.svg" alt class="personnel" />
          <div>
            <div class="visits">Purchases</div>
            <div class="count">{{}}</div>
          </div>
        </div>
      </el-card>

      <el-card class="box-card">
        <div class="new">
          <img src="../assets/购物车.svg" alt class="personnel" />
          <div>
            <div class="visits">Shoppings</div>
            <div class="count">{{}}</div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      count:'' //计数器请求
    };
  },
  methods: {
    getData(){
      axios.get('api/homeData').then(res =>{
        this.count = res.data
        console.log(this.count)
      }).catch(err =>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.admin {
  display: flex;
  justify-content: space-between;
}
.box-card {
  width: 300px;
  height: 90px;
  margin-left: 20px;
  position: relative;
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
.visits{
  position: absolute;
  right: 35px;
  top: -55px;
}
.count{
  position: absolute;
  right: 65px;
  top: -30px;
}

</style>