<template>
<!-- 注册 -->

 <div>
     <div class="back">
         <img src="../assets/002.jpg" alt="" class="img">
         <div class="jpg">

         </div>
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
.back{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.jpg{
    width: 250px;
    height: 250px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
}
.img{
    width: 100%;
    height: 717px;
}

</style>