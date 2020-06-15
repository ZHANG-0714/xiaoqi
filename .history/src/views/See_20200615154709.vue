<template>
<!--已发布 查看 -->
 <div class="see">
     <el-button type="primary">返回</el-button>
     <div>
         <div class="title">{{ruleForm.title}}</div>
         <div>摘要：{{ruleForm.abstract}}</div>
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
         ruleForm: {
            title: "",
            abstract: "",
            category: ""
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
    font-size: 28px;
    font-weight: 800;
}

</style>