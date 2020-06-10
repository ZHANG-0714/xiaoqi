<template>
<!-- 登录 -->
 <div>
     <div class="back">
      <img src="../assets/002.jpg" alt class="img" />

      <el-card class="box-card">
          <!-- 表头 -->
        <div slot="header" class="">
          <div class="backstage">欢迎来到xiaoqi后台管理系统</div>
        </div>

        <div class="el--input--width">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <!-- 用户名 -->
                <el-form-item label="请输入用户名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="请输入密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <!-- 验证码 -->
                <el-form-item label="请输入验证码" prop="verification">
                    <el-input v-model="ruleForm.verification" class="el-input"></el-input>
                    <div v-html="this.verifi" class="verifi"></div>
                </el-form-item>
            </el-form>
        </div>
        <!-- 按钮 -->
        <el-row>
             <el-button type="primary">立即登录</el-button>
            <el-button type="primary">立即注册</el-button>
        </el-row>

      </el-card>

    </div>
 </div>
</template>

<script>
import axios from 'axios';
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
     return {
          verifi:'' ,//验证码请求
          
          ruleForm: {
          name: '', //用户名
          pass:'',  //密码
          verification :'',  //验证码
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pass:[
            { required: true, message: '密码不能为空', trigger: 'blur',validator: validatePass },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ],
          verification:[
            { required: true, message: '验证码不能为空', trigger: 'blur'},
            { min: 4, max: 4, message: '长度为 4 个字符', trigger: 'blur' }
          ]
        
        }
     }
   },
   methods: {
       getData(){
           axios.get('/api/captcha').then(res =>{
               this.verifi = res.data
               console.log(this.verifi)
           }).catch(err =>{
               console.log(err)
           })
       }

   },
   mounted() {
       this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.back {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-card {
  width: 525px;
  height: 300px;
  position: absolute;
  top: 30%;
  border: 0;
  background-color: rgba(0, 0, 0.1, 0.4);
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
  text-align: center;
  color: rgb(226, 223, 223);
}
.el-button{
 background-color: rgba(182, 179, 179, 0.4);
 border: 0;
 margin-top: 10px;
 margin-left: 110px;
 margin-bottom: 20px;
}
.el-input{
    position: relative;
    width: 40%;
}
.verifi{
    position: absolute;
}

</style>