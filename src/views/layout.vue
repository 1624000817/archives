<template>
  <el-container direction="vertical">
    <Header></Header>
    <Aside></Aside>
    <router-view></router-view>
  </el-container>
</template>
<script>
import "@/assets/styles/layout.css"
import Header from "@/components/Header1";
import Aside from "@/components/Aside";
export default {
  components: {
    Aside,
    Header
  },
};
</script>
