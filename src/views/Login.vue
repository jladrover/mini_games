<template>
  <div class="login" v-if="login">
    <h1>Login page</h1>
    <el-container>
        <el-header>
            <el-button type="primary" @click="login = !login">Go to register</el-button>
        </el-header>
        <el-main>
            <el-form :model="form" label-width="auto" style="max-width: 500px">
                <el-form-item label="Username" prop="name">
                    <el-input clearable v-model="ruleForm.name"/>
                </el-form-item>
                <el-form-item label="Password" prop="pass">
                    <el-input v-model="ruleForm2.pass" type="password" autocomplete="off" clearable />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
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
            <el-button type="success" @click="login = !login">Go to login</el-button>
        </el-header>
        <el-main>
            <el-form :model="form" label-width="auto" style="max-width: 500px">
                <el-form-item label="Username" prop="name" placeholder="Choose a username">
                    <el-input clearable  v-model="ruleForm.name" placeholder="Choose a unique username"/>
                </el-form-item>
                <el-form-item label="Password" prop="pass">
                    <el-input v-model="ruleForm2.pass" type="password" autocomplete="off" clearable />
                </el-form-item>
                <el-form-item label="Confirm Password" prop="checkPass">
                    <el-input v-model="ruleForm2.checkPass" type="password" autocomplete="off"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        Submit
                    </el-button>
                    <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer></el-footer>
      </el-container>
  </div>
</template>

<script setup>
import { userName, password_SHA } from '@/fakeBackend/userInfo';
import { reactive, ref } from 'vue';
// import { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref(null)

const ruleForm = reactive({
  name: '',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  location: '',
  type: [],
  resource: '',
  desc: ''
})

const ruleForm2 = reactive({
  pass: '',
  checkPass: ''
})

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const rules = reactive({
  name: [{ required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
})

const login = ref(true)

</script>

<style scoped>
</style>


  