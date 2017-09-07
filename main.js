import Vue from 'vue';
import App from './app.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Routers = [
    {
        path:'/index',
        meta:{
            title:'首页'
        },
        component:(resolve) => require(['./view/index.vue'],resolve)
    },
    {
        path:'/about',
        meta:{
            title:'介绍页'
        },
        component:(resolve) => require(['./view/about.vue'],resolve)

    },
    {
        path:'/user/:id',
        meta:{
            title:'个人主页'
        },
        component:(resolve) => require(['./view/user.vue'],resolve)
    },
    {
        path:'/login',
        meta:{
            title:'登录'
        },
        component:(resolve) => require(['./view/login.vue'],resolve)
    },
    {
        path:'*',
        redirect:'./index'
    }
];


const RouterConfig = {
    mode:'history',
    routes:Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to,from,next)=>{
    // window.document.title = to.meta.title;
    if(window.localStorage.getItem('token')){
        next();
    }else{
        if(to.path=="/login"){
            next();
        }else{
            next('/login');
        }
    }
});

router.afterEach((to,from,next)=>{
    window.scrollTo(0,0);
});

new Vue({
    el:'#app',
    router,
    render:h=>h(App)
});