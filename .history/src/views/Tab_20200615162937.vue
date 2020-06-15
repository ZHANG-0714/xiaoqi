<template>
<!-- 标签页 -->
 <div>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    
      <el-tab-pane label="用户管理" name="first">
        <el-card class="box-card">
          <div class="unread" v-for="(item,index) in arr" :key="index">
            <div class="con">{{item.con}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="primary">
            <el-button type="primary">全部标为已读</el-button>
          </div>
        </el-card>
        </el-tab-pane>

      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  
  </el-tabs>

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
       activeName: 'first',
       arr: [
        {
          con: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        },
        {
          con: "今晚12点整发大红包，先到先得",
          time: "2018-04-19 21:00:00"
        }
      ],
      arr1: [
        {
          con: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        }
      ],
      arr2: [
        {
          con: "【系统通知】您的优惠券已过期",
          time: "2018-04-19 20:00:00"
        }
      ]

     }
   },
   methods: {
     handleClick(tab, event) {
        console.log(tab, event);
      }
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
.unread{
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.con{
height: 50px;
width: 40%;
text-align: left;
position: absolute;
top: 30px;
left: 20px;
}
.time{
height: 50px;
width: 30%;
position: absolute;
right: 20px;
top: 30px;
}
.primary{
text-align: left;
margin-top: 20px;
}
</style>