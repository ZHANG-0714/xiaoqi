<template>
  <!-- 公共组件 -->
  <div>
    <el-container>
      <!-- 导航栏头部 -->
      <el-header>
          <div class="headers"> 
              <div>欢迎{{name}}来到小七后台系统</div>
              <div class="xiaoqi">
                  <div>{{}}</div>
                  ，亲爱的
                  <div>{{name}}</div>
                  上次登录时间：
                  <div>{{time}}</div>
              </div>
          </div>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#344055"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
              <!-- 首页 -->
                  <el-menu-item index="1">
                  <i class="el-icon-location"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
            <!-- 已发布 -->
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">已发布</span>
                </el-menu-item>
            <!-- 统计 -->
                <el-menu-item index="3">
                  <i class="el-icon-menu"></i>
                  <span slot="title">统计</span>
                </el-menu-item>
            <!-- 发表文章 -->
                <el-menu-item index="4">
                  <i class="el-icon-check"></i>
                  <span slot="title">发表文章</span>
                </el-menu-item>
            <!-- 标签页 -->
                <el-menu-item index="5">
                  <i class="el-icon-setting"></i>
                  <span slot="title">标签页</span>
                </el-menu-item>
            <!-- 导出excel -->
                <el-menu-item index="6">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导出excel</span>
                </el-menu-item>
            <!-- 图片上传 -->
                <el-menu-item index="7">
                  <i class="el-icon-setting"></i>
                  <span slot="title">图片上传</span>
                </el-menu-item>
            <!-- 退出系统 -->
                <el-menu-item index="8">
                  <i class="el-icon-delete"></i>
                  <span slot="title">退出系统</span>
                </el-menu-item>

              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!-- 主体内容 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <!-- <router-view></router-view> -->
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
        name:'' , //用户名
        time:'',
        user:{}
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
     
      this.user = JSON.parse(localStorage.getItem('user'))
      this.name = user.username
      console.log(user.date)
      this.time = dayjs(this.user.date).format('YYYY年MM月DD日hh时mm分ss秒')
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
</style>