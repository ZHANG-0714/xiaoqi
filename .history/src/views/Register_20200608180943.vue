<template>
  <!-- 注册 -->

  <div>
    <div class="back">
      <img src="../assets/002.jpg" alt class="img" />

      <el-card class="box-card">
        <div slot="header">
          <div class="backstage">欢迎来到xiaoqi后台管理系统</div>
        </div>
        <div>
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </div>
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
    return {
        form: {
          name: ''
        }
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.back {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-card {
  width: 450px;
  height: 300px;
  position: absolute;
  top: 30%;
  // background-color: rgba(0, 0, 0, 0.2);
  background-color: #fff;
}
.img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.backstage {
  width: 100%;
  height: 30px;
  font-size: 19px;
  font-weight: 800;
}
</style>