<template>
  <div class="login" v-if="login">
    <h1>Login</h1>
    <el-form></el-form>
    <el-button @click="login = !login"></el-button>
  </div>

  <div class="register" v-else>
    <h1>register</h1>
    <el-form></el-form>
    <el-button @click="login = !login"></el-button>
  </div>
</template>

<script setup>
import { userName, password_SHA } from '@/fakeBackend/userInfo';
import { ref } from 'vue';
const login = ref(true)

</script>

<style scoped>
</style>