<template>
  <!-- 首页 -->

  <div>
    <div class="el--input--width admin">
      <el-card class="box-card">
        <div class="new">
          <img src="../assets/人员管理.svg" alt class="personnel" />
          <div class="">
            <div>New Visits</div>
            <div>{{}}</div>
          </div>
        </div>
      </el-card>

      <el-card class="box-card">
        <img src="../assets/人员管理.svg" alt class="personnel" />
      </el-card>

      <el-card class="box-card">
        <img src="../assets/人员管理.svg" alt class="personnel" />
      </el-card>

      <el-card class="box-card">
        <img src="../assets/人员管理.svg" alt class="personnel" />
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
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
}
.personnel {
  width: 50px;
  color: #5dcfcd;
}
.new {
  display: flex;
}
.item {
    padding: 0;
  }

</style>