import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes: [
        {
            path: '/',
            redirect: '/login',
            name: '首页',
            hidden: true,
            component: () => import('@/components/Login'),
        },
        {
            path: '/login',
            name: 'login',
            hidden: true,
            //路由懒加载
            component: () => import('@/components/Login'),
            //异步组件
            // component: resolve => require(['@/components/Home'], resolve),
        },
        // {
        //     path: '*',
        //     name: 'NotFound',
        //     hidden: true,
        //     component: () => import('@/components/NotFound'),
        // },
        {
            path: '/home',
            name: '学生管理',
            iconClass: 'User',
            redirect: '/home/student',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/home/student',
                    name: '学生列表',
                    iconClass: 'List',
                    component: () => import('@/components/students/StudentList')
                },
                {
                    path: '/home/info',
                    name: '信息列表',
                    iconClass: 'List',
                    component: () => import('@/components/students/InfoList')
                },
                {
                    path: '/home/infos',
                    name: '信息管理',
                    iconClass: 'List',
                    component: () => import('@/components/students/InfoLists')
                },
                {
                    path: '/home/work',
                    name: '作业列表',
                    iconClass: 'List',
                    component: () => import('@/components/students/WorkList')
                },
                {
                    path: '/home/works',
                    name: '作业管理',
                    iconClass: 'List',
                    component: () => import('@/components/students/WorkMent')
                },
            ]
        },
        {
            path: '/home',
            name: '数据分析',
            iconClass: 'DataLine',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/home/dataview',
                    name: '数据概览',
                    iconClass: 'DataLine',
                    component: () => import('@/components/dataAnalysis/DataView')
                },
                {
                    path: '/home/mapview',
                    name: '地图概览',
                    iconClass: 'DataLine',
                    component: () => import('@/components/dataAnalysis/MapView')
                },
                {
                    path: '/home/travel',
                    name: '旅游地图',
                    iconClass: 'DataLine',
                    component: () => import('@/components/dataAnalysis/TravelMap')
                },
                {
                    path: '/home/score',
                    name: '分数地图',
                    iconClass: 'DataLine',
                    component: () => import('@/components/dataAnalysis/ScoreMap')
                },
            ]
        },
        {
            path: '/users',
            name: '用户中心',
            iconClass: 'User',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/users/user',
                    name: '权限管理',
                    iconClass: 'User',
                    component: () => import('@/components/users/User'),
                }
            ]
        },
    ],
    history: createWebHistory(),
});

export default router;