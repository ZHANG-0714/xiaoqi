<template>
<!-- 发表文章 -->
 <div class="article">
     <div class="button">
        <el-button type="danger">查看</el-button>
        <el-button class="primary" type="primary">发表</el-button>
     </div>

     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="文章标题" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-form>



 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       ruleForm: {
          name: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入文章标题', trigger: 'blur' },
          ],
        }
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.article{
  width: 98%;
  margin: 0 auto;
}
.button{
  width: 100%;
  line-height: 50px;
  text-align: right;
  // padding-left: -20px;
  background: #59A586;
}
.primary{
  margin-right: 30px;
}
</style>