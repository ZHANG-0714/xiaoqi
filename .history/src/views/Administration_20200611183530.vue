<template>
  <!-- 公共组件 -->
  <div class="public">
    <el-container>
      <!-- 导航栏头部 -->
      <el-header>
          <div class="headers"> 
              <div>欢迎{{user.username}}来到小七后台系统</div>
              <div class="xiaoqi">
                  <div>{{hi}}</div>
                  ，亲爱的
                  <div>{{user.username}}</div>
                  上次登录时间：
                  <div>{{time}}</div>
              </div>
          </div>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-row>
            <el-col :span="12">
                <!-- 高亮 :default-active="$route.path"-->
              <el-menu
                :default-active="$route.path"  
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#344055"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
              >
              <!-- 首页 -->
                  <el-menu-item index="/">
                  <i class="el-icon-location"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
            <!-- 分页表格 -->
                 <el-menu-item index="/Paging">
                  <i class="el-icon-menu"></i>
                  <span slot="title">分页表格</span>
                </el-menu-item>
            <!-- 已发布 -->
                <el-menu-item index="/Published">
                  <i class="el-icon-goods"></i>
                  <span slot="title">已发布</span>
                </el-menu-item>
            <!-- 统计 -->
                <el-menu-item index="/Statistics">
                  <i class="el-icon-menu"></i>
                  <span slot="title">统计</span>
                </el-menu-item>
            <!-- 发表文章 -->
                <el-menu-item index="/Publish">
                  <i class="el-icon-check"></i>
                  <span slot="title">发表文章</span>
                </el-menu-item>
            <!-- 标签页 -->
                <el-menu-item index="/Tab">
                  <i class="el-icon-document"></i>
                  <span slot="title">标签页</span>
                </el-menu-item>
            <!-- 导出excel -->
                <el-menu-item index="/Excel">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导出excel</span>
                </el-menu-item>
            <!-- 图片上传 -->
                <el-menu-item index="/Picture">
                  <i class="el-icon-setting"></i>
                  <span slot="title">图片上传</span>
                </el-menu-item>
            <!-- 退出系统 -->
                <el-menu-item index="/signOut">
                  <i class="el-icon-delete"></i>
                  <span slot="title">退出系统</span>
                </el-menu-item>

              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!-- 主体内容 -->
        <el-main>
              <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        time:'', 
        user:{} ,
        hi: {}
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },

  mounted() {
    //登录获取的对象
      this.user = JSON.parse(localStorage.getItem('user'))
    //  获取当前登录时间
      this.time = dayjs().format('YYYY年MM月DD日hh时mm分ss秒')
    //   判断时间段
      let hi = dayjs().format('HH')
      if(hi > 6 && hi <= 13){
          this.hi = '早上好'
      }
      else if(hi >11 && hi <= 13){
          this.hi = '中午好'
      }
      else if(hi >13 && hi <= 18){
          this.hi = '下午好'
      }
      else if(hi >18 && hi <= 23){
          this.hi = '晚上好'
      }
      else{
        this.hi = '该睡觉了'
      }
      // index = this.$route.path
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  background-color: rgb(46,94,133);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-menu{
  height: 1450px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-col-12{
    width: 100%;
    text-align: left;
}
.element{
    background: #344055;
}
.headers{
    display: flex;
    color: #fff;
    justify-content: space-between;
}
.xiaoqi{
     display: flex;
}
.el-main[data-v-1cedf218]{
  line-height: 0;
}
</style>