<template>
  <!-- 统计 -->
  <div>
    <div class="Statistics">
      <!-- 今日发布 -->
      <div class="today">
        <div>
          <div>今日发布</div>
          <div>{{}}</div>
        </div>

        <div>
          <i class="el-icon-check"></i>
        </div>
      </div>
      <!-- 原创文章 -->
      <div class="original">
        <div>
          <div>原创文章</div>
          <div>{{}}</div>
        </div>

        <div>
          <i class="el-icon-document"></i>
        </div>
      </div>
      <!-- 新留言 -->
      <div class="leaving">
        <div>
          <div>新留言</div>
          <div>0</div>
        </div>

        <div>
          <i class="el-icon-bell"></i>
        </div>
      </div>
      <!-- 新消息 -->
      <div class="news">
        <div>
          <div>新消息</div>
          <div>0</div>
        </div>

         <div>
          <i class="el-icon-phone-outline"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Statistics {
  width: 100%;
  height: 60px;
  display: flex;
}
.today {
  width: 25%;
  line-height: 35px;
  display: flex;
  color: #fff;
  background: #7ccabf;
}
.original {
  width: 25%;
  line-height: 35px;
  display: flex;
  color: #fff;
  background: #e88a87;
}
.leaving {
  width: 25%;
  line-height: 35px;
  display: flex;
  color: #fff;
  background: #8375a3;
}
.news {
  width: 25%;
  line-height: 35px;
  display: flex;
  color: #fff;
  background: #9fcec1;
}
</style>