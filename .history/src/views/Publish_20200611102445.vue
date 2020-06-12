<template>
<!-- 发表文章 -->
 <div class="article">
   <!-- 按钮 -->
     <div class="button">
        <el-button type="danger">查看</el-button>
        <el-button class="primary" type="primary">发表</el-button>
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
          <el-form-item label="作者" prop="author" style="width: 200px;">
            <el-input el-input v-model="ruleForm.author"></el-input>
          </el-form-item>

        <el-form-item label="类目" prop="classe" style="width: 200px;">
            <el-select v-model="ruleForm.classe" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        
        </div>

      </el-form>

     </div>



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
          abstract:'',
          author:'',
          classe:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入文章标题', trigger: 'blur' }
          ],
          abstract:[
            { required: true, message: '请输入文章摘要', trigger: 'blur' }
          ],
          author:[
            { required: true, message: '请输入作者', trigger: 'blur' }
          ],
          classe:[
            { required: true, message: '请选择类目', trigger: 'change' }
          ]
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
  background: #59A586;
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
</style>