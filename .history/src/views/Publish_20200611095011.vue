<template>
<!-- 发表文章 -->
 <div class="article">
     <div class="button">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发表</el-button>
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
  height: 50px;
  display: flex;
  align-content: center;
  background: #59A586;
}

</style>