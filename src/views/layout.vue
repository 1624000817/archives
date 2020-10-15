<template>
  <el-container direction="vertical">
    <Header></Header>
    <el-container>
      <Aside></Aside>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>
<script>
import "@/assets/styles/layout.css";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
export default {
  components: {
    Aside,
    Header,
  },
};
</script>
