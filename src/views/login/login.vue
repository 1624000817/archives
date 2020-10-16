<template>
  <div class="loginPage">
    <div class="loginConBox">
        <div class="loginLogo">
            无锡市档案史志馆
        </div>
        <div class="loginFormBox">
        <div class="loginTitle">用户登录</div>
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                class="loginForm"
            >
                <el-form-item prop="name">
                <el-input v-model="ruleForm.name" placeholder="用户名">
                    <img src="../../assets/images/login/icon1.png" class="loginIcon" slot="prefix">
                </el-input>
                </el-form-item>
                <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm.password" placeholder="密码">
                    <img src="../../assets/images/login/icon2.png" class="loginIcon" slot="prefix">
                </el-input>
                </el-form-item>
                <div class="flexBetween loginOperation">
                    <el-checkbox v-model="ruleForm.checked" class="loginRemember">记住密码</el-checkbox>
                    <router-link to="" class="loginForgetText">忘记密码？</router-link>
                </div>
                <el-button type="primary" class="loginBtn" @click="submitForm('ruleForm')" >登&nbsp;录</el-button>
            </el-form>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
        fullscreen: false,
        ruleForm: {
            name: "",
            password: "",
            checked:false
        },
        rules: {
            name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
            password: [{ required: true, message: "请输入密码", trigger: "blur" }]
        },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
           console.log("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.loginPage {
    width: 100vw;
    height: 100vh;
    background: url("../../assets/images/login/l_bg.jpg") no-repeat center;
    background-size: cover;
}
.loginConBox{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%);
    width: 31.1875rem;
    height: auto;
}
.loginLogo{
    width: 100%;
    height:auto;
    margin: 0 auto 5rem auto;
    font-size:2.1875rem;
    color: #ffffff;
    text-align: center;
}
.loginFormBox {
    width: 31.1875rem;
    height: 30.25rem;
    padding: 3.125rem 3rem 3.625rem 3rem;
    background: url("../../assets/images/login/con_bg.png") no-repeat center;
    background-size: cover;
}
.loginTitle {
    width: 100%;
    height: 2.8125rem;
    line-height: 2.8125rem;
    margin-bottom: 3.125rem;
    font-size: 1.625rem;
    color: #ffffff;
    text-align: center;
}
.loginForm /deep/ .el-form-item{
    margin-bottom: 2rem;
}
.loginForm /deep/ .el-input__inner {
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    padding-left: 3.5rem;
    font-size: 0.875rem;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.102);
    border-radius: 0.375rem;
    border-color: rgba(0, 192, 255, 0.6);
}
.loginForm /deep/ .el-input__prefix{
    left: 0;
    width: 3.5rem;
    height: 3.5rem;
    line-height: 3.5rem;
}
.loginIcon{
    vertical-align: middle;
}
.loginOperation{
    height: 1rem;
    line-height: 1rem;
    margin-top: -0.25rem;
    margin-bottom: 2.25rem;
}
.loginRemember /deep/ .el-checkbox__inner{
    width: 0.875rem;
    height: 0.875rem;
    background-color: transparent;
    border-color:#00b8ff;
}
.loginRemember /deep/ .el-checkbox__inner::after{
    top: 0.125rem;
    left: 0.3125rem;
    border-color:#00b8ff;
}
.loginRemember /deep/ .el-checkbox__label{
    line-height: 1;
    font-size:0.75rem;
    color: #ffffff;
}
.loginForgetText{
    line-height: 1;
    font-size:0.75rem;
    color:#00b8ff;
}
.loginBtn{
    width: 100%;
    height: 3.5rem;
    font-size: 1.125rem;
    background: linear-gradient( 90deg, rgb(0,96,255) 0%, rgb(0,150,255) 100%);
    border-radius: 0.375rem;
    border:0;
}
</style>





