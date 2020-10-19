<template>
  <div class="userB">
    <div class="userBNew">
      <el-input
        v-model="input"
        placeholder="用户编号"
        class="userBNewInput"
      ></el-input>
      <el-button type="primary" class="userBNewButtom">查询</el-button>
      <el-button type="primary" class="userBNewButtom3">批量删除</el-button>
      <el-button type="primary" class="userBNewButtom2">新增用户</el-button>
    </div>
    <div class="userBTable">
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
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
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="danger" icon="el-icon-delete"></el-button>
          <el-button type="info" icon="el-icon-message"></el-button>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        background
        layout="prev, pager, next,  sizes, total, jumper"
        :total="1"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
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
      ],
      currentPage1: 5,
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
.userB {
  width: 100%;
  height: auto;
  padding-top: 1.875rem;
}

.userBNew {
  width: 100%;
  height: 4.375rem;
  padding-bottom: 1.875rem;
}

.userBNewInput {
  float: left;
  width: auto;
  margin-right: 0.625rem;
}

.userBNewButtom {
  float: left;
}

.userBNewButtom2 {
  float: right;
}

.userBNewButtom3 {
  float: right;
  margin-left: 1px !important;
}

.userBTable {
  width: 100%;
  height: auto;
}

.el-pagination {
  padding: 0.3125rem 0.3125rem !important;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #409eff !important;
}
</style>