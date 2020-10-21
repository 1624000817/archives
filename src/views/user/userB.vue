<template>
  <div class="userB flexColumn">
    <div class="userBNew">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="form.input" placeholder="用户编号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="onSubmit"
            >查询</el-button
          >
        </el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary" size="small">批量删除</el-button>
          <el-button type="primary" size="small">新增用户</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="userBTable flex flexColumn">
      <el-table
        class="flex"
        ref="multipleTable"
        :data="tableData"
        height="100%"
        border
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"> </el-table-column>
        <el-table-column label="用户编号" width="250">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column prop="address" label="登录账号" width="250">
        </el-table-column>
        <el-table-column prop="name" label="用户昵称" width="250">
        </el-table-column>
        <el-table-column prop="time" label="注册时间" width="250">
        </el-table-column>
        <el-table-column prop="cz" label="操作" show-overflow-tooltip>
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
          ></el-button>
          <el-button
            type="info"
            icon="el-icon-setting"
            size="mini"
          ></el-button>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="form.pageList.current"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="form.pageList.pageSize"
        background
        layout="prev, pager, next,  sizes, total, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      form: {
        input: "",
        pageList: {
          pageSize: 10,
          current: 1,
        },
      },
      tableData: [
        {
          id: "11111",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
        {
          id: "11112",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
        {
          id: "1111",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
        {
          id: "1111",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
        {
          id: "1111",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
        {
          id: "1111",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
        {
          id: "1111",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
        {
          id: "1111",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
        {
          id: "1111",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
        {
          id: "1111",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
        {
          id: "1111",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
        {
          id: "1111",
          address: "hello",
          name: "小猪配齐",
          time: "2020-05-26",
        },
      ],
    };
  },
  methods: {
    handleSelectionChange(selection) {
     console.log("selection", selection);
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
  mounted(){
      this.total = this.tableData.length || 0;
  }
};
</script>

<style scoped>
.userB {
  width: 100%;
  height: calc(100% - 5.625rem);
  overflow: hidden;
}

.userBNew {
  width: 100%;
  padding-top: 1.875rem;
}

.userBTable {
  flex: 1;
  display: flex;
}
.userBTable /deep/ .el-table td{
    height: 48px;
    padding: 0;
}
.el-pagination {
  margin-top: 1.25rem;
}
</style>
