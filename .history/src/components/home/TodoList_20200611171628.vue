<template>
  <!-- TodoList 添加删除 -->
  <div>
    <div>
      <el-card class="box-cards">
    <!-- Todo List 表头-->
        <div slot="header" class="clearfix">
            <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        ></el-checkbox>
          <!-- <span>&or;</span> -->
          <span class="or">Todo List</span>
        </div>
    <!-- 选项 -->
        <div class="public">
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div>
    <!-- 按钮 -->
        <div class="button">
            <div class="option" @click="arr" :class="{'buttons':flag === true}">{{}} items left</div>
            <div class="option">All</div>
            <div class="option">Active</div>
            <div class="option">Completed</div>
        </div>

      </el-card>
    </div>
  </div>
</template>

<script>
const list = [
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
        flag: false,
      checkAll: false,
      checkedCities: [],
      cities: list,
      isIndeterminate: true
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? list : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    arr(){
        this.flag = true
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
  margin-top: -15px;
  right: 10px;
}
.public{
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
.button{
    margin-top: 40px;
    display: flex;
}
.option{
    margin-left: 30px;
     font-size: 13px;
}
.buttons{
    border: 1px solid #ccc;
    padding: 12px;
}
</style>