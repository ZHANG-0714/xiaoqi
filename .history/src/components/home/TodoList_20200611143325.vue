<template>
  <!-- TodoList 添加删除 -->
  <div>
    <div>

        <el-card class="box-cards">
        <div slot="header" class="clearfix">
    <span>卡片名称</span>
      </div>
       </el-card>

      <!-- <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-00table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-00table-column>
      </el-table>

         <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div> -->

    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        tableData: [{
          date: 'star this repository'
          }, {
          date: 'fork this repository'
        }, {
          date: 'follow author'
        }, {
          date: 'vue-admin'
        }, {
          date: 'vue'
        }, {
          date: 'element-ui'
        }, {
          date: 'axios'
        },{
          date: 'webpack'
        }],
        multipleSelection: []
    };
  },
  methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-cards {
  width: 350px;
  height: 430px;
  margin-left: 10px;
}
</style>