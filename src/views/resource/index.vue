<template>
  <div class="flexColumn resourceBox">
    <div class="resourceClassify">
      <div class="resourceClassifyTitle">档案分类</div>
      <el-upload
        class="resourceUpload flexRowReverse"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary" class="resourceFileBtn"
          >上传文件</el-button
        >
      </el-upload>
    </div>
    <div class="resourceCBottom">
      <div class="resourceTree">树状图</div>
      <div class="resourceDetail flex flexColumn">
        <div class="resourceSearch">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="档案类别">
              <el-select v-model="formInline.type" placeholder="请选择">
                <el-option label="类别一" value="type1"></el-option>
                <el-option label="类别二" value="type2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="归档日期">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="formInline.date"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button size="small" type="primary" @click="onSubmit"
                >查找</el-button
              >
              <el-button size="small" type="primary">批量删除</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="resourceTableBox flex flexColumn">
          <div class="resourceTable flex">表格</div>

          <el-pagination
            class="resourcePage"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="formInline.pageList.current"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="formInline.pageList.pageSize"
            layout="prev, pager, next,  sizes, total,  jumper"
            :total="total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        total:50,
        formInline: {
            date: "",
            type: "",
            pageList:{
                pageSize:10,
                current:1
            }
        },
        fileList: [
            {
            name: "food.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
            name: "food2.jpeg",
            url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
        ],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(res, file, fileList) {
      console.log(res, file, fileList);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
.resourceBox {
  height: 100%;
}
.resourceClassify {
  margin-bottom: 1.875rem
}
.resourceClassifyTitle {
  width: 100%;
  height: 3.125rem;
  line-height: 3.125rem;
  font-size: 1.125rem;
  color: #409efc;
}
.resourceUpload /deep/ .el-upload-list {
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 2rem;
  line-height: 2rem;
  background-color: #ffffff;
  border: 1px solid #41719c;
}
.resourceUpload /deep/ .el-upload-list__item {
  width: auto;
  height: 2rem;
  line-height: 2rem;
  margin-top: 0;
}
.resourceUpload /deep/ .el-upload-list__item:hover {
  background-color: transparent;
}
.resourceUpload /deep/ .el-icon-close {
  top: 0.625rem;
}
.resourceUpload /deep/ .el-icon-close-tip {
  display: none !important;
}
.resourceFileBtn {
  margin-left: 1.25rem;
}
.resourceCBottom {
  flex: 1;
  display: flex;
}
.resourceTree {
  width: 15rem;
  height: auto;
  margin-right: 1.875rem;
  background-color: #ffffff;
  border: 1px solid #41719c;
}
/* .resourceDetail{
    flex: 1;
}
.resourceTableBox{
    flex: 1;
}
 */
 .resourceTable{
    background-color: #ffffff;
}
.resourcePage{
    margin-top: 1.25rem;
}
</style>
