<template>
    <div class="menu">
        <el-aside width="200px">
            <el-menu router :default-active="activePath" class="el-menu-vertical-demo" background-color="#2578b5"
                text-color="#fff" active-text-color="#ffd04b">
                <template v-for="(item, index) in menus">
                    <el-sub-menu :index="index + ''" :key="index" v-if="!item.hidden">
                        <!-- slot="title" 改成#title 并用template包裹 -->
                        <template #title>
                            <component class="icon" :is="item.iconClass"></component>
                            <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item :index="child.path" v-for="(child, index2) in item.children" :key="index2">
                            <component class="icon" :is="child.iconClass"></component>
                            {{ child.name }}
                        </el-menu-item>
                    </el-sub-menu>
                </template>
            </el-menu>
        </el-aside>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const menus = router.options.routes;
const activePath = router.currentRoute.value.path;
</script>

<style lang="less">
.menu {
    .el-aside {
        height: 100%;

        .el-menu {
            height: 100%;

            .icon {
                width: 18px;
                margin-right: 10px;
            }
        }

        .el-submenu .el-menu-item {
            min-width: 0;
        }
    }
}
</style>