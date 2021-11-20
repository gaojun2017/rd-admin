<template>
  <div class="login">
    <div class="form-box">
      <el-input v-model="username" placeholder="请输入内容"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/beijing.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.form-box {
  width: 35%;
  margin: 0 auto;
  padding-top: 15%;
}
</style>