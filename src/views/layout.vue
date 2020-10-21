<template>
  <el-container class="layoutBox" direction="vertical">
    <Header></Header>
    <el-container>
      <Aside></Aside>
      <el-main>
        <div class="conTop">
          <div class="conTopL">
            <!-- {{ $route.meta.name }} -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="conTopR">
            <div class="conTopRDiv">
              登录ip：
              <font class="conTopRDivC">100.0.0.0</font>
            </div>
            <div class="conTopRDiv">
              登录地点：
              <font class="conTopRDivC">无锡新区</font>
            </div>
            <div class="conTopRDiv">
              登录时间：
              <font class="conTopRDivC">2020-10-09 15:18:30 星期五</font>
            </div>
            <div class="conTopRDiv">
              登录者：
              <font class="conTopRDivC">张三</font>
            </div>
          </div>
        </div>
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
