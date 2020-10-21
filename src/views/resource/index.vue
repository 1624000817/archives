<template>
  <div class="flexColumn resourceBox layoutContent">
    <div class="resourceClassify">
      <div class="resourceClassifyTitle">档案分类</div>
      <el-upload
        class="resourceUpload flexRowReverse"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :on-error="handleError"
        :before-remove="beforeRemove"
        multiple
        :file-list="fileList"
      >
        <el-button size="small" type="primary" class="resourceFileBtn"
          >上传文件</el-button
        >
      </el-upload>
    </div>
    <div class="resourceCBottom">
      <div class="resourceTree">
        <div class="resourceTreeScroll">
          <el-tree
            :data="treeData"
            default-expand-all
            node-key="id"
            :props="defaultProps"
          >
          </el-tree>
        </div>
      </div>
      <div class="resourceDetail flex flexColumn">
        <div class="resourceSearch">
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="档案类别">
              <el-select v-model="form.type" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="归档日期">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date"
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
          <el-table
            :data="tableData"
            class="resourceTable flex"
            height="100%"
            stripe
            border
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column
              prop="no"
              label="档案编号"
              min-width="180"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="档案名"
              min-width="180"
            ></el-table-column>
            <el-table-column
              prop="type"
              label="档案类型"
              min-width="180"
            ></el-table-column>
            <el-table-column
              prop="uploadName"
              label="上传人"
              min-width="180"
            ></el-table-column>
            <el-table-column prop="date" label="上传时间" min-width="200">
            </el-table-column>
          </el-table>

          <el-pagination
            class="archivesPage"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="form.pageList.current"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="form.pageList.pageSize"
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
      total: 0,
      limit: 5,
      form: {
        date: "",
        type: " ",
        pageList: {
          pageSize: 10,
          current: 1,
        },
      },
      options: [
        {
          value: "type1",
          label: "黄金糕",
        },
        {
          value: "type2",
          label: "双皮奶",
        },
        {
          value: "type3",
          label: "蚵仔煎",
        },
        {
          value: "type4",
          label: "龙须面",
        },
        {
          value: "type5",
          label: "北京烤鸭",
        },
      ],
      treeData: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
            {
              id: 9,
              label: "二级 3-3",
            },
          ],
        },
        {
          id: 4,
          label: "一级 4",
          children: [
            {
              id: 10,
              label: "二级 4-1",
            },
            {
              id: 11,
              label: "二级 4-2",
            },
            {
              id: 12,
              label: "二级 4-3",
            },
            {
              id: 13,
              label: "二级 4-4",
            },
            {
              id: 14,
              label: "二级 4-5",
            },
            {
              id: 15,
              label: "二级 4-6",
            },
          ],
        },
        {
          id: 5,
          label: "一级 5",
          children: [
            {
              id: 16,
              label: "二级 5-1",
            },
            {
              id: 17,
              label: "二级 5-2",
            },
            {
              id: 18,
              label: "二级 5-3",
            },
            {
              id: 19,
              label: "二级 5-4",
            },
            {
              id: 20,
              label: "二级 5-5",
            },
            {
              id: 21,
              label: "二级 5-6",
            },
            {
              id: 22,
              label: "二级 5-7",
            },
            {
              id: 23,
              label: "二级 5-8",
            },
            {
              id: 24,
              label: "二级 5-9",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      tableData: [
        {
          no: "BH0001",
          name: "档案1",
          type: "类型1",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0002",
          name: "档案2",
          type: "类型2",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0003",
          name: "档案3",
          type: "类型3",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0004",
          name: "档案4",
          type: "类型4",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0005",
          name: "档案5",
          type: "类型5",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0006",
          name: "档案6",
          type: "类型6",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0007",
          name: "档案7",
          type: "类型7",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0008",
          name: "档案8",
          type: "类型8",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0009",
          name: "档案9",
          type: "类型9",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0010",
          name: "档案10",
          type: "类型10",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0011",
          name: "档案11",
          type: "类型11",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0012",
          name: "档案12",
          type: "类型12",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
        {
          no: "BH0013",
          name: "档案13",
          type: "类型13",
          uploadName: "王小虎",
          date: "2016-05-03",
        },
      ],
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
      ],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleSuccess(res, file, fileList) {
      console.log(res, file, fileList);
    },
    handleError(err, file, fileList) {},
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    onSubmit() {
      console.log("查找!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleSelectionChange(selection) {
      console.log("selection", selection);
    },
  },
  mounted() {
    this.total = this.tableData.length || 0;
  },
};
</script>

<style scoped>

.resourceClassify {
  margin-bottom: 1.875rem;
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
  min-height:2.5rem;
  line-height: 2.5rem;
  background-color: #ffffff;
  border: 1px solid #409EFF;
  border-radius: 0.25rem;
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
  overflow: hidden;
}
.resourceTree {
  width: 15rem;
  height: auto;
  padding: 0.625rem 0;
  margin-right: 1.875rem;
  background-color: #ffffff;
  border: 1px solid #409EFF;
  border-radius: 0.375rem;
}
.resourceTreeScroll {
  height: 100%;
  overflow: auto;
}

</style>
