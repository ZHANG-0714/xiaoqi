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

    <div class="chart">
      <!-- 饼图 -->
        <div class="cake">
          <ve-pie :data="chartData"></ve-pie>
        </div>
      <!-- 玫瑰图 -->
        <div class="rose">
          <ve-ring :data="chartRose" :settings="chartSettings"></ve-ring>
        </div>
    </div>
    <!-- 瀑布图 -->
    <ve-waterfall :data="chartData"></ve-waterfall>

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
    this.chartSettings = {
        roseType: 'radius'
      }
    return {
    // 饼图
      chartData: {
          columns: ['分类', '数量'],
          rows: []
        },
    // 玫瑰图
        chartRose: {
          columns: ['分类', '数量'],
          rows: []
        },
        chartData: {
          columns: ['活动', '时间'],
          rows: [
            { '活动': '吃饭', '时间': 4 },
            { '活动': '睡觉', '时间': 10 },
            { '活动': '打豆豆', '时间': 5 }
          ]
        }
    };
  },
  methods: {},
  mounted() {
    axios.get('api/article/allArticle').then(res =>{
      console.log(res.data.data)
      //取发布文章的类目
      let obj = groupBy(res.data.data,'category')
      for (let i in obj){
        this.chartData.rows.push({
          '数量': obj[i].length,   //循环对象，拿每一项数据push进去
          '分类': i
        })
      }
       //取发布文章的来源
      let objr = groupBy(res.data.data,'source')
      for (let i in objr){
        this.chartRose.rows.push({
           '数量': objr[i].length,   //循环对象，拿每一项数据push进去
          '分类': i
        })
      }
      console.log(obj)

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
.chart{
  margin-top: 30px;
 display: flex;
}
.cake{
  flex: 1;
}
.rose{
  flex: 1;
}
</style>