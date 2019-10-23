<template>
  <div class="container">
    <el-form
      ref="loginForm"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="login-form">
      <h3 class="login-title">{{ $t('login.title') }}</h3>
      <el-form-item :label="$t('login.username.name')" prop="username">
        <el-input v-model="form.username" type="text" :placeholder="$t('login.username.placeholder')" prefix-icon="el-icon-user" />
      </el-form-item>
      <el-form-item :label="$t('login.password.name')" prop="password">
        <el-input v-model="form.password" type="password" :placeholder="$t('login.password.placeholder')" prefix-icon="el-icon-unlock" />
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
        password: '',
        error: null
      },

      rules: {
        username: [
          { required: true, message: this.$t('login.username.rules.required'), trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('login.password.rules.required'), trigger: 'blur' }
        ]
      },

      dialogVisible: false
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
          this.$router.push('/main');
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    },
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.form.username,
          password: this.form.password
        })
        this.form.username = ''
        this.form.password = ''
        this.form.error = null
      } catch (e) {
        this.form.error = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.form.error = e.message
      }
    },
    handleClose () {}
  }
}
</script>

<style lang="scss" scoped>
.login-form {
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
