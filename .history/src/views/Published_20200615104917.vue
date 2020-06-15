<template>
  <!-- 已发布 -->
  <div>
    <div>
      <el-table :data="success" border style="width: 100%">
        <!-- 排序 -->
        <el-table-column type="index" label="#" width="60"></el-table-column>
        <!-- 标题 -->
        <el-table-column prop="title" label="标题" width="150"></el-table-column>
        <!-- 作者 -->
        <el-table-column prop="author" label="作者" width="100"></el-table-column>
        <!-- 类目 -->
        <el-table-column prop="category" label="类目" width="100"></el-table-column>
        <!-- 来源 -->
        <el-table-column prop="source" label="来源" width="150"></el-table-column>
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
        <el-table-column prop="date" label="发布时间" width="200"></el-table-column>
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
          // this.date = success.format("YYYY年MM月DD日hh时mm分ss秒");
          // console.log(this.date);
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
          }
          // this.$axios
          //   .get("api/article/allArticle")
          //   .then(res => {
          //     this.tableData = res.data.data;
          //     console.log(res.data.data);
          //   })
          //   .catch(err => {
          //     console.log(err);
          //   });
        })
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