<template>
  <el-container class="layoutBox" direction="vertical">
    <Header></Header>
    <el-container>
      <Aside></Aside>
      <el-main>
      <router-view></router-view>
      </el-main>
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
