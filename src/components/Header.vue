<template>
  <el-container>
    <el-header>
      <div class="headerLeft">
        <div class="headerLeftL">無錫檔案局</div>
        <div class="headerLeftR">2020-10-09 15:18:30 星期五</div>
      </div>
      <div class="headerRight">
        <div class="headerRight1">
          <img src="../../static/icon1.png" />
        </div>
        <div class="headerRight1">
          <img src="../../static/icon2.png" />
        </div>
        <div class="headerRight2">
          <img src="../../static/icon3.png" />
        </div>
        <div class="headerRightUser">
          <div class="headerRightUserName">管理员</div>
          <div class="headerRight3">
            <img src="../../static/icon4.png" />
          </div>
        </div>
      </div>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "头部",
    };
  },
};
</script>

<style type="text/css">
@import url(../assets/styles/styles.css);
</style>

