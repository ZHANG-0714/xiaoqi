<template>
  <!-- 统计 -->
  <div>
    <div class="Statistics">
      <!-- 今日发布 -->
      <div class="today">
        <div class="release">
          <div>今日发布</div>
          <div class="article">{{}}</div>
        </div>

        <div>
          <i class="el-icon-check"></i>
        </div>
      </div>
      <!-- 原创文章 -->
      <div class="original">
        <div class="release">
          <div>原创文章</div>
          <div class="article">{{}}</div>
        </div>

        <div>
          <i class="el-icon-document"></i>
        </div>
      </div>
      <!-- 新留言 -->
      <div class="leaving">
        <div class="release">
          <div>新留言</div>
          <div class="article">0</div>
        </div>

        <div>
          <i class="el-icon-bell"></i>
        </div>
      </div>
      <!-- 新消息 -->
      <div class="news">
        <div class="release">
          <div>新消息</div>
          <div class="article">0</div>
        </div>

         <div>
          <i class="el-icon-phone-outline"></i>
        </div>
      </div>
    </div>

    <div>
      <ve-pie :data="chartData"></ve-pie>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import groupBy from 'lodash/groupBy'

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
    };
  },
  methods: {},
  mounted() {
    axios.get('api/article/allArticle')
    .then(res =>{
      console.log(res.data.data)
      let obj = groupBy(res.data.data)

    })
    .catch(err =>{
      console.log(err)
    })
  },
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
  justify-content: center;
  color: #fff;
  background: #7ccabf;
}
.original {
  width: 25%;
  line-height: 35px;
  display: flex;
  justify-content: center;
  color: #fff;
  background: #e88a87;
}
.leaving {
  width: 25%;
  line-height: 35px;
  display: flex;
  justify-content: center;
  color: #fff;
  background: #8375a3;
}
.news {
  width: 25%;
  line-height: 35px;
  display: flex;
  justify-content: center;
  color: #fff;
  background: #9fcec1;
}
i{
  flex: 3;
  margin-top: 20px;
  padding-right: 30px;
}
.release{
  flex: 2;
  padding-left: 10px;
}
.article{
  margin-top: -10px;
}
</style>