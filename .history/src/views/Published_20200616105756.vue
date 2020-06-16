<template>
  <!-- 已发布 -->
  <div>
    <div>
      <el-table :data="success" border style="width: 100%">
        <!-- 排序 -->
        <el-table-column type="index" label="#" width="60"></el-table-column>
        <!-- 标题 -->
        <el-table-column prop="title" label="标题" width="100"></el-table-column>
        <!-- 作者 -->
        <el-table-column prop="author" label="作者" width="100"></el-table-column>
        <!-- 类目 -->
        <el-table-column prop="category" label="类目" width="200">
          <template slot-scope="scope">
          
          <el-button type="success" plain  v-if="scope.row.category === 'Vue'">{{ scope.row.category }}</el-button>
          <el-button type="info" plain  v-if="scope.row.category === 'React'">{{ scope.row.category }}</el-button>
          <el-button type="primary" plain  v-if="scope.row.category === 'Node.js'">{{ scope.row.category }}</el-button>
          <el-button type="success" plain  v-if="scope.row.category === '性能优化'">{{ scope.row.category }}</el-button>
          <el-button type="info" plain  v-if="scope.row.category === 'JavaScipt'">{{ scope.row.category }}</el-button>
          <el-button type="success" plain  v-if="scope.row.category === '小程序'">{{ scope.row.category }}</el-button>
          <el-button type="danger" plain  v-if="scope.row.category === '工具类'">{{ scope.row.category }}</el-button>
          <el-button type="primary" plain  v-if="scope.row.category === '其他'">{{ scope.row.category }}</el-button>
        </template>
        </el-table-column>
        <!-- 来源 -->
        <el-table-column prop="source" label="来源" width="130"></el-table-column>
        <!-- 重要性 -->
        <el-table-column prop="star" label="重要性" width="160">
        <template slot-scope="scope">
          <el-rate
            :value="parseInt(scope.row.star)"
            disabled
            show-score
            text-color="#ff9900"
          ></el-rate>
          </template>
        </el-table-column>
        <!-- 发布时间 -->
        <el-table-column prop="date" label="发布时间" width="150"></el-table-column>
        <!-- 操作 按钮 -->
        <el-table-column label="操作">

           <template slot-scope="scope">
              <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              <el-button type="success"  @click="handleWatch(scope.$index, scope.row)">查看</el-button>
           </template>

        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from 'dayjs'

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      success: [] //获取已发布的文章
    };
  },
  methods: {
    //  获取已发布的文章
    getData() {
      axios
        .get("api/article/allArticle")
        .then(res => {
          this.success = res.data.data;
          this.success.map((item,index) =>{
            item.date = dayjs(item.date).format('YYYY年MM月DD日hh时mm分mm秒')
          })
        })
        .catch(err => {
          console.log(err);
        });
    },
    //  删除
    handleDelete(index,row) {
      axios
        .post("api/article/delete", {
          _id: row._id
        })
        .then(res => {
          console.log(res);
          if(res.data.code === 200){
             this.$message({
              type: "success",
              message: "删除成功"
            });
            this.getData()
          }
        })
    },
    // 编辑  跳转编辑路由传值
    handleEdit(index,row){
      this.$router.push({path:'Edit',query: { id: row._id }})
    },
    //查看  跳转编辑路由传值
    handleWatch(index,row){
      this.$router.push({path:'See',query: { id: row._id }})
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
