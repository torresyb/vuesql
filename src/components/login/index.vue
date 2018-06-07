<template>
  <div class="login">
    <div class="loginImg"><img src="../../assets/login.jpg" alt=""> 外高桥埋点</div>
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="loginForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item class="center">
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          password: '',
          username: ''
        },
        rules: {
          username: [
            { required: true, message: '请选择填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请选择填写密码', trigger: 'blur' },
            { min: 6, message: '密码长度至少为6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.loginForm.username === 'admin' && this.loginForm.password === 'zb1111'){
              this.$message({
                message: '恭喜你，登录成功！',
                type: 'success'
              });
              storage.set('login', JSON.stringify({name: 'admin'}))
              this.$router.push('index')
            }else {
              this.$message.error('登录失败，请重试！');
            }
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
#content.login{
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  padding: 25px 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px #efefef;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 0;
}
  .loginImg{
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
    color: #2aafc8;
  }
  .loginImg img{
    width: 50px;
    vertical-align: middle;
  }
  .center{
    text-align: center;
  }
</style>