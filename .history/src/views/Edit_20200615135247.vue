<template>
  <!-- 编辑 -->
  <div>
    <div class="button">
      <el-button type="danger">返回</el-button>
      <el-button type="primary">发布</el-button>
    </div>

     <!-- 发表文章内容 -->
     <div class="content">
       <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
         <!-- 文章标题 -->
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      <!-- 文章摘要 -->
        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>

        <div class="publish">
          <!-- 作者 -->
          <el-form-item label="作者" prop="author" style="width: 250px;">
            <el-input el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
          <!-- 类目 -->
        <el-form-item label="类目" prop="category" style="width: 250px;">
            <el-select v-model="ruleForm.category" placeholder="请选择">
            <el-option label="Vue" value="Vue"></el-option>
            <el-option label="React" value="React"></el-option>
            <el-option label="Node.js" value="Node.js"></el-option>
            <el-option label="性能优化" value="性能优化"></el-option>
            <el-option label="JavaScipt" value="JavaScipt"></el-option>
            <el-option label="小程序" value="小程序"></el-option>
            <el-option label="工具类" value="工具类"></el-option>
            <el-option label="其他" value="其他"></el-option>
            </el-select>
        </el-form-item>
        <!-- 来源 -->
        <el-form-item label="来源" prop="source" style="width:210px;">
            <el-select v-model="ruleForm.source" placeholder="请选择">
            <el-option label="原创" value="原创"></el-option>
            <el-option label="转载" value="转载"></el-option>
            <el-option label="与他人合作" value="与他人合作"></el-option>
            </el-select>
        </el-form-item>
        <!-- 重要性 -->
        <el-form-item label="重要性" prop="star" style="width: 250px;">
            <el-select v-model="ruleForm.star" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
            </el-select>
        </el-form-item>
        <!-- 发布时间 -->
        <div class="block">
          <span class="demonstration">发布时间</span>
          <el-date-picker
            v-model="date"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </div>       
        </div>
      </el-form>
     </div>

     <!-- mavon-editor(markdown编辑器) -->
     <div>
       <mavon-editor v-model="text"/>
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
    //   ruleForm:{
    //       title:'',
    //   }
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
.article{
  width: 99%;
  margin: 0 auto;
}
.primary{
  margin-right: 30px;
}
.content{
  margin-top: 30px;
}
.publish{
  display: flex;
}
.demonstration{
  margin-left: 20px;
  margin-right: 10px;
}
.release{
  margin-top: 20px;
}
</style>