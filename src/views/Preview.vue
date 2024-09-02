<template>
    <div>
        <el-container>
            <el-header>
                <el-row justify="space-between">
                    <el-col :span="5"/>
                    <el-col :span="5">
                        <el-icon :size="50"><SwitchFilled /></el-icon>
                    </el-col>

                    <el-col :span="5">
                        <el-button-group>
                        <el-button icon="Setting">Setting</el-button>
                        <el-button icon="Back" @click="logout">Logout</el-button>
                    </el-button-group>
                    </el-col>
                </el-row>
            </el-header>

            <el-main>
                <el-space wrap>
                    <el-card v-for="game in games">
                        <template #header>
                            <div class="card-header">
                                <el-text>{{ game.name }}</el-text> 
                            </div>
                        </template>

                        <el-image :src="game.img">
                            <template #placeholder>
                                <el-icon><Loading /></el-icon>
                            </template>

                            <template #error>

                            </template>
                        </el-image>

                        <template #footer>
                            <div class="card-footer">
                                <el-button @click="">Play</el-button>
                            </div>
                        </template>
                    </el-card>
                </el-space>
            </el-main>

            <el-footer>
                <Copyright/>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Copyright from '@/components/copyright.vue'
const router = useRouter();

const games = ref([
    {name: "Tic-Tac-Toe", img: "", route: ""},
    {name: "Pac-Man", img: "", route: ""},
    {name: "Mario Cart", img: "", route: ""},
    {name: "CS:GO", img: "", route: ""},
    {name: "Tic-Tac-Toe", img: "", route: ""},
    {name: "Tic-Tac-Toe", img: "", route: ""},
    {name: "Tic-Tac-Toe", img: "", route: ""},
    {name: "Tic-Tac-Toe", img: "", route: ""},
    {name: "Tic-Tac-Toe", img: "", route: ""},
    {name: "Tic-Tac-Toe", img: "", route: ""},
    {name: "Tic-Tac-Toe", img: "", route: ""},
    {name: "Tic-Tac-Toe", img: "", route: ""},
    {name: "Tic-Tac-Toe", img: "", route: ""},
    {name: "Tic-Tac-Toe", img: "", route: ""},
])

const logoutConfirm = ref(false)
const logout = () => {
    router.replace('/')
}

const play = gameLink => {
    router.replace({name: gameLink})
}

</script>

<style scoped>
</style>