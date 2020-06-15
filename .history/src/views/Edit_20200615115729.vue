<template>
<!-- 编辑 -->
 <div>
     <div>
        <el-button type="danger">返回</el-button>
         <el-button type="primary">发布</el-button>
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
         id:""
     }
   },
   methods: {

   },
   mounted() {
       this.id = this.$route.query.id
       
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>