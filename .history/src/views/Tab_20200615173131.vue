<template>
  <!-- 标签页 -->
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- 未读消息 -->
      <el-tab-pane label="未读消息" name="first">
        <el-card class="box-card">
          <div class="unread" v-for="(item,index) in arr" :key="index">
            <div class="con">{{item.con}}</div>
            <div class="time">{{item.time}}</div>
            <div class="sign">
              <el-button @click="already(item,index)">标为已读</el-button>
            </div>
          </div>
          <div class="primary">
            <el-button type="primary" @click="whole">全部标为已读</el-button>
          </div>
        </el-card>
      </el-tab-pane>
      <!-- 已读消息 -->
      <!-- <el-tab-pane label="已读消息" name="second">
        <el-card class="box-card">
          <div class="unread" v-for="(item,index) in arr1" :key="index">
            <div class="con">{{item.con}}</div>
            <div class="time">{{item.time}}</div>
            <div class="sign">
              <el-button @click="Delete(item,index)">删除</el-button>
            </div>
          </div>
          <div class="primary">
            <el-button type="danger" @click="delAll" class="btnAll">删除全部</el-button>
          </div>
        </el-card>
      </el-tab-pane> -->
      <el-tab-pane :label="Read" name="second">
        <el-card class="box-card">
          <div v-for="(item,index) in arr1" :key="index" class="notice">
            <div class="con">{{item.con}}</div>
            <div class="time">{{item.time}}</div>
            <div class="sign">
              <el-button @click="del(item,index)">删除</el-button>
            </div>
          </div>
          <el-button type="danger" @click="delAll" class="btnAll">删除全部</el-button>
        </el-card>
      </el-tab-pane>
      <!-- 回收站 -->
      <el-tab-pane label="回收站" name="third">
        <el-card class="box-card">
          <div class="unread" v-for="(item,index) in arr1" :key="index">
            <div class="con">{{item.con}}</div>
            <div class="time">{{item.time}}</div>
            <div class="sign">
              <el-button>还原</el-button>
            </div>
          </div>
          <div class="primary">
            <el-button type="info">清空回收站</el-button>
          </div>
        </el-card>
      </el-tab-pane>
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
      },

    // 标为已读
      already(item,index){
        this.arr.splice(index,1)
        this.arr1.push(item)
      },
    // 全部标为已读
      whole(){
        this.arr1 = this.arr1.concat(this.arr)
        this.arr = []
      },
    // 删除
      del(item,index){
        this.arr1.splice(index,1)
        this.arr2.push(item)
      },
    // 全部删除
      delAll(){
      this.arr1 = this.arr1.concat(this.arr)
      this.arr1 =[]
      }
   },
   mounted() {

   },
   watch: {

   },
   computed: {
     Read(){
       return '已读消息'+"（" + this.arr.length + "）"
     }
   }
 }
</script>

<style scoped lang='scss'>
.unread {
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.con {
  height: 50px;
  width: 40%;
  text-align: left;
  position: absolute;
  top: 30px;
  left: 20px;
}
.time {
  height: 50px;
  width: 30%;
  position: absolute;
  right: 20px;
  top: 30px;
}
.primary {
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
}
.sign {
  padding-top: 10px;
  text-align: right;
}
</style>