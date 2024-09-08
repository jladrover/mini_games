<template>
  <div class="login" v-if="login">
    <h1>Login page</h1>
    <el-container>
      <el-header>
        <el-button type="primary" @click="toggleLoginRegister">Go to register</el-button>
      </el-header>
      <el-main>
        <el-form
          :model="loginForm"
          ref="loginFormRef"
          label-width="auto"
          style="max-width: 500px"
        >
          <el-form-item label="Username" prop="name">
            <el-input v-model="loginForm.name" clearable />
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input v-model="loginForm.pass" type="password" autocomplete="off" clearable />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitLoginForm">Submit</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>

  <div class="register" v-else>
    <h1>Register page</h1>
    <el-container>
      <el-header>
        <el-button type="success" @click="toggleLoginRegister">Go to login</el-button>
      </el-header>
      <el-main>
        <el-form
          :model="registerForm"
          :rules="rules"
          ref="registerFormRef"
          label-width="auto"
          style="max-width: 500px"
        >
          <el-form-item label="Username" prop="name">
            <el-input v-model="registerForm.name" clearable placeholder="Choose a unique username" />
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input v-model="registerForm.pass" type="password" autocomplete="off" clearable />
          </el-form-item>
          <el-form-item label="Confirm Password" prop="checkPass">
            <el-input v-model="registerForm.checkPass" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitRegisterForm">
              Submit
            </el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { userName, password_SHA } from '@/fakeBackend/userInfo'

const login = ref(true)
const loginFormRef = ref(null)
const registerFormRef = ref(null)

const loginForm = ref({
  name: '',
  pass: ''
})

const registerForm = ref({
  name: '',
  pass: '',
  checkPass: ''
})

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (registerForm.value.checkPass !== '') {
      if (!registerFormRef.value) return
      registerFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== registerForm.value.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const rules = {
  name: [
    { required: true, message: 'Please input username', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }]
}

const toggleLoginRegister = () => {
  login.value = !login.value
}

const submitLoginForm = async () => {
  if (!loginFormRef.value) return
  await loginFormRef.value.validate(async (valid, fields) => {
    if (valid) {
      const { name, pass } = loginForm.value;
      //const hashedPassword = password_SHA[name];
      //console.log(userName, password_SHA);
      if (name.toLowerCase() == userName.toLowerCase() && pass === password_SHA) {
        console.log('Login successful');
      } else {
        //console.log(name, pass);
        console.log('Invalid username or password');
      }
    } else {
      console.log('Login validation failed:', fields)
    }
  })
}

const submitRegisterForm = async () => {
  if (!registerFormRef.value) return
  await registerFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('Registration submitted:', registerForm.value)
    } else {
      console.log('Registration validation failed:', fields)
    }
  })
}
</script>

<style scoped>
</style>