<template>
  <!-- TodoList 添加删除 -->
  <div>
    <div>
      <el-card class="box-cards">
        <div slot="header" class="clearfix">

            <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        >全选</el-checkbox>

          <!-- <span>&or;</span> -->
          <span class="or">Todo List</span>
        </div>


        <div style="margin: 15px 0;"></div>

        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-card>
    </div>
  </div>
</template>

<script>
const cityOptions = [
  "star this repository",
  "fork this repository",
  "follow author",
  "vue-admin",
   "vue",
   "element-ui",
   "axios",
   "webpack"
];
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
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
.clearfix {
  position: relative;
  text-align: left;
}
.or {
  position: absolute;
  right: 10px;
}
</style>