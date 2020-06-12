<template>
  <!-- 图片上传 -->
  <div>
    <el-card class="box-card">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-card>

    <!-- <div id="app">
 3     <button class="btn" @click="toggleShow">设置头像</button>
 4     <my-upload  
 5     @crop-success="cropSuccess" 
 6     @crop-upload-success="cropUploadSuccess"
 7     @crop-upload-fail="cropUploadFail"
 8     v-model="show" 
 9     :width="200" 
10     :height="200" 
11     img-format="png" 
12     :size="size"
13     langType='zh'
14     :noRotate='false'
15     field="Avatar1"
16     url="https://httpbin.org/post"></my-upload>
17     <img :src="imgDataUrl">
    18   </div>-->
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload";

export default {
  name: "",
  props: {},
  components: {
    //  "my-upload": myUpload
  },
  data() {
    return {
      //  imgDataUrl: "",
      //   show: false,
      //   size:2.1
    };
  },
  methods: {
    //  toggleShow() {
    //         this.show = !this.show;
    //     },
    //     cropSuccess(imgDataUrl, field) {
    //         console.log('-------- crop success --------',imgDataUrl, field);
    //     },
    //     //上传成功回调
    //     cropUploadSuccess(jsonData, field){
    //         console.log('-------- upload success --------');
    //         this.imgDataUrl = jsonData.files.Avatar1;
    //         console.log(jsonData);
    //         console.log('field: ' + field);
    //     },
    //     //上传失败回调
    //     cropUploadFail(status, field){
    //         console.log('-------- upload fail --------');
    //         console.log('上传失败状态'+ status);
    //         console.log('field: ' + field);
    //     }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>