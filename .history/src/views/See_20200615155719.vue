<template>
<!--已发布 查看 -->
 <div class="see">
     <el-button type="primary">返回</el-button>
     <div class="ruleForm">
         <div class="title">{{ruleForm.title}}</div>
         <div class="abstract">摘要：{{ruleForm.abstract}}</div>
         <el-card class="box-card">
             {{text}}
         </el-card>
     </div>


 </div>
</template>

<script>
import axios from "axios";

 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         id:'',
         text:'',
         ruleForm: {
            title: "",
            abstract: "",
      }
     }
   },
   methods: {

   },
   mounted() {
    this.id = this.$route.query.id;
    console.log(this.id)
    axios.post('/api/article/article',{_id: this.id})
    .then(res =>{
        console.log(res.data.data)
        this.ruleForm = res.data.data;
        this.date = res.data.data.date;
        this.text = res.data.data.text
    }).catch(err =>{
        console.log(err)
    })

   },
   watch: {
       
   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.see{
    position: relative;
}
.el-button{
    position: absolute;
    left: 20px;
}
.title{
    height: 30px;
    width: 100%;
    font-size: 28px;
    font-weight: 800;
}
.abstract{
    height: 30px;
    width: 100%;
    margin-top: 20px;
}
.box-card{
    width: 90%;
    height: 200px;
}

</style>