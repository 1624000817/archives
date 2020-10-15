<template>
  <el-container direction="vertical">
    <Header></Header>
    <Aside></Aside>
    <router-view></router-view>
  </el-container>
</template>
<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";
export default {
  components: {
    Header,
    Aside,
  },
};
</script>
