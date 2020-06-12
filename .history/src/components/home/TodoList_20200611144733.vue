<template>
  <!-- TodoList 添加删除 -->
  <div>
    <div>

      <el-card class="box-cards">
        <div slot="header" class="clearfix">
            <span>&or;</span>
          <span class="or">Todo List</span>
        </div>
      </el-card>

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
      tableData: [
        {
          date: "star this repository"
        },
        {
          date: "fork this repository"
        },
        {
          date: "follow author"
        },
        {
          date: "vue-admin"
        },
        {
          date: "vue"
        },
        {
          date: "element-ui"
        },
        {
          date: "axios"
        },
        {
          date: "webpack"
        }
      ],
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
.or{
   text-align: left; 
}
.clearfix{
    text-align: left; 
}
</style>