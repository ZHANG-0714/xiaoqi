<template>
<!-- 已发布 -->
 <div>
   <div>
     <el-table
    :data="success"
    border
    style="width: 100%">
    <!-- 排序 -->
    <el-table-column
      prop="index+1"
      label="#"
      width="100">
    </el-table-column>
    <!-- 标题 -->
    <el-table-column
      prop="title"
      label="标题"
      width="100">
    </el-table-column>
    <!-- 作者 -->
    <el-table-column
      prop="author"
      label="作者"
      width="100">
    </el-table-column>
    <!-- 类目 -->
    <el-table-column
      prop="category"
      label="类目"
      width="100">
    </el-table-column>
    <!-- 来源 -->
    <el-table-column
      prop="source"
      label="来源"
      width="100">
    </el-table-column>
    <!-- 重要性 -->
    <el-table-column
      prop="star"
      label="重要性"
      width="100">
    </el-table-column>
    <!-- 发布时间 -->
    <el-table-column
      prop="date"
      label="发布时间"
      width="100">
    </el-table-column>
<!-- 操作 按钮 -->
    <el-table-column
      label="操作">

      <el-button type="primary">编辑</el-button>
      <el-button type="danger">删除</el-button>
      <el-button type="success">查看</el-button>

    </el-table-column>
  </el-table>

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
       success:[]  //获取已发布的文章
     }
   },
   methods: {
    //  获取已发布的文章
     getData(){
       axios.get('api/article/allArticle')
       .then(res =>{
         this.success = res.data.data
         console.log(this.success)
       })
       .catch(err =>{
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

</style>