<template>
    <div class="login">
        <el-card class="box-card">
            <!-- slot="header" 改成#header 并用template包裹 -->
            <template #header>
                <div class="clearfix">
                    <span>通用后台管理系统</span>
                </div>
            </template>
            <el-form label-width="80px" :model="form" ref="form" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { nameRule, passRule } from '@/utils/validate';
import { setToken } from '@/utils/setToken';
import { login } from '@/api/api';
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
            rules: {
                username: [
                    { validator: nameRule, trigger: 'blur' },
                    { required: true }
                ],
                password: [
                    { validator: passRule, trigger: 'blur' },
                    { required: true }
                ],
            }
        }
    },
    methods: {
        login(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    login(this.form).then(res => {
                        if (res.data.status == 200) {
                            setToken('username', res.data.username);
                            setToken('token', res.data.token);
                            this.$message({ message: res.data.message, type: 'success' });
                            this.$router.push('/home');
                        }
                    });
                }
            })
        }
    }
}
</script>

<style lang="less">
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('../assets/bg.jpg') center no-repeat;

    .box-card {
        width: 450px;
        margin: 200px auto;
        background: #65768557;
        color: #fff;

        .el-form .el-form-item__label {
            color: #fff;
        }

        .el-card__header {
            font-size: 34px;
        }

        .el-button {
            width: 100%;
        }
    }
}
</style>