<template>
  <!-- TodoList 添加删除 -->
  <div>
    <div>

      <el-card class="box-cards">
        <div slot="header" class="clearfix">
            <span>&or;</span>
          <span class="or">Todo List</span>
        </div>

        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>

        <div style="margin: 15px 0;"></div>

        <el-checkbox-group v-model="tableData" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>

      </el-card>

    </div>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
         checkAll: false,
        tableData: ['axios', 'webpack'],
        cities: tableData,
        isIndeterminate: true,

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
      handleCheckAllChange(val) {
        this.checkedCities = val ? tableData : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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
.clearfix{
    position: relative;
    text-align: left; 
}
.or{
   position: absolute; 
   right: 10px;
}
</style>