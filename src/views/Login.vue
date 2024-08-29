<template>
    <el-container class="test">
        <el-header class="header">
            <span>Test</span>
        </el-header>
        <el-main class="main">
            <el-scrollbar>
                <el-form>
                    <el-form-item label="Username">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="Password">
                        <el-input v-model="form.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login">Login</el-button>
                    </el-form-item>
                </el-form>
            </el-scrollbar>
        </el-main>
    </el-container>
</template>
  
  

<script setup>

</script>

<style scoped>
  .test .el-header {
    position: relative;
    background-color: #FFC470; /* Green color for the header */
    color: white;             /* White text for the header */
  }
  
  
  /* .main {
    background-color: #4793AF; 
    color: black;              
    padding: 20px;
    text-align: left;
  } */
</style>