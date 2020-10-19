<template>
  <el-aside>
    <el-menu
      :router="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      background-color="#2e68ea"
      text-color="#ffffff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <div class="menuIcon usermenu">
            <img src="../assets/images/layout/menu1.png" />
          </div>
          <div class="menuM">用户管理</div>
        </template>
        <el-menu-item-group>
          <el-menu-item index="userB" class="i">B端用户管理</el-menu-item>
          <el-menu-item index="1-2" class="i">C端用户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <div class="menuIcon">
          <img src="../assets/images/layout/menu2.png" />
        </div>
        <div class="menuM">目录管理</div>
      </el-menu-item>
      <el-menu-item index="3">
        <div class="menuIcon">
          <img src="../assets/images/layout/menu3.png" />
        </div>
        <div class="menuM">审批记录</div>
      </el-menu-item>
      <el-menu-item index="resource">
        <div class="menuIcon">
          <img src="../assets/images/layout/menu4.png" />
        </div>
        <div class="menuM">资源管理</div>
      </el-menu-item>
      <el-menu-item index="5">
        <div class="menuIcon">
          <img src="../assets/images/layout/menu5.png" />
        </div>
        <div class="menuM">角色权限管理</div>
      </el-menu-item>
      <el-menu-item index="6">
        <div class="menuIcon">
          <img src="../assets/images/layout/menu6.png" />
        </div>
        <div class="menuM">搜索记录</div>
      </el-menu-item>
      <el-menu-item index="7">
        <div class="menuIcon">
          <img src="../assets/images/layout/menu7.png" />
        </div>
        <div class="menuM">系统日志</div>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          id: "1",
          icon: require("@/assets/images/layout/menu1.png"),
          name: "用户管理",
          path: "/",
          child: [
            {
              id: "1-1",
              name: "B端用户管理",
              path: "/userB",
            },
          ],
        },
        {
          id: "2",
          icon: require("@/assets/images/layout/menu2.png"),
          name: "目录管理",
          path: "/",
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(index, indexPath) {
      console.log("index", index);
      console.log("indexPath", indexPath);
    },
  },
};
</script>
