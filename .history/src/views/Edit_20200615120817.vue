<template>
  <!-- 编辑 -->
  <div>
    <div class="button">
      <el-button type="danger">返回</el-button>
      <el-button type="primary">发布</el-button>
    </div>

    <div>
      <el-form-item label="文章标题">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
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
      id: "",
      ruleForm:{
          title:'',
      }
    };
  },
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.id)
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.button {
  display: flex;
  justify-content: space-around;
}
</style>