<template>
  <div class="container">
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">{{ $t('login.title') }}</h3>
      <el-form-item :label="$t('login.username.name')" prop="username">
        <el-input v-model="form.username" type="text" :placeholder="$t('login.username.placeholder')" />
      </el-form-item>
      <el-form-item :label="$t('login.password.name')" prop="password">
        <el-input v-model="form.password" type="password" :placeholder="$t('login.password.placeholder')" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('loginForm')">{{ $t('login.OK') }}</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      :title="$t('login.dialog.title')"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>{{ $t('login.dialog.message') }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">{{ $t('login.dialog.OK') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: this.$t('login.username.rules.required'), trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('login.password.rules.required'), trigger: 'blur' }
        ]
      },

      // 对话框显示和隐藏
      dialogVisible: false
    }
  },
  methods: {
    onSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          this.$router.push('/main');
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-box {
  border: 1px solid #DCDFE6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
