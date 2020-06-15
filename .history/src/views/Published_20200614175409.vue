<template>
<!-- 已发布 -->
 <div>
   <div>

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
       success:''  //获取已发布的文章
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