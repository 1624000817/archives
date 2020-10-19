<template>
  <el-aside>
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#2e68ea"
      text-color="#ffffff"
      active-text-color="#ffd04b"
    >
      <template v-for="item in menu">
        <el-submenu :index="item.path" :key="item.id" v-if="item.child">
          <template slot="title">
            <div class="menuIcon usermenu">
              <img :src="item.icon" />
            </div>
            <div class="menuM">{{item.name}}</div>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="items in item.child" :key="items.id" :index="items.path" class="i">{{items.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="item.path" :key="item.id" v-else>
        <div class="menuIcon">
          <img :src="item.icon" />
        </div>
        <div class="menuM">{{item.name}}</div>
      </el-menu-item>
      </template>
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
            {
              id: "1-2",
              name: "C端用户管理",
              path: "userC",
            },
          ],
        },
        {
          id: "2",
          icon: require("@/assets/images/layout/menu2.png"),
          name: "目录管理",
          path: "/1",
        },
        {
          id: "3",
          icon: require("@/assets/images/layout/menu3.png"),
          name: "审批记录",
          path: "/2",
        },
        {
          id: "4",
          icon: require("@/assets/images/layout/menu4.png"),
          name: "资源管理",
          path: "/resource",
        },
        {
          id: "5",
          icon: require("@/assets/images/layout/menu5.png"),
          name: "角色权限管理",
          path: "/3",
        },
        {
          id: "6",
          icon: require("@/assets/images/layout/menu6.png"),
          name: "搜索记录",
          path: "/4",
        },
        {
          id: "7",
          icon: require("@/assets/images/layout/menu7.png"),
          name: "系统日志",
          path: "/5",
        },
      ],
    };
  },
  methods: {
    handleSelect(index, indexPath) {
      console.log("index", index);
      console.log("indexPath", indexPath);
    },
  },
};
</script>
