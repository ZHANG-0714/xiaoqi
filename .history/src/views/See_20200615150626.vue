<template>
<!--已发布 查看 -->
 <div>
     <el-button type="primary">返回</el-button>


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
         id:''
     }
   },
   methods: {

   },
   mounted() {
    this.id = this.$route.query.id;
    console.log(this.id)

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>