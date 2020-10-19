<template>
  <el-header>
    <div class="screen">
      <img :src="fullscreen ? icon2 : icon1" @click="fullScreen" />
    </div>
    <div class="headerLeft">
      <router-link to="/" class="headerLeftL">无锡市档案史志馆</router-link>
    </div>
    <div class="headerRight">
      <div class="headerRight1">
        <img @click="onLogin" src="../assets/images/layout/icon1.png" />
      </div>
      <div class="headerRight1">
        <img src="../assets/images/layout/icon2.png" />
      </div>
      <div class="headerRight2">
        <img src="../assets/images/layout/icon3.png" />
      </div>
      <div class="headerRightUser">
        <div class="headerRightUserName">管理员</div>
        <div class="headerRight3">
          <img src="../assets/images/layout/icon4.png" />
        </div>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      fullscreen: false,
      icon1: require("@/assets/images/layout/open.png"),
      icon2: require("@/assets/images/layout/close.png"),
    };
  },
  methods: {
    onLogin() {
      this.$router.push({ path: "/login" });
    },
    fullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
  },
};
</script>


