import Vue from 'vue';
import Vuex from 'vuex';
import App from './app.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Vuex);

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
    // if(window.localStorage.getItem('token')){
    //     next();
    // }else{
    //     if(to.path=="/login"){
    //         next();
    //     }else{
    //         next('/login');
    //     }
    // }
    next();
});

router.afterEach((to,from,next)=>{
    // window.scrollTo(0,0);
    // next();
});

const store = new Vuex.Store({
    // vuex 配置
    state:{
        count:0,
        list:[1,39,4,5,66,7,9]
    },
    mutations:{                 // 尽量不要使用异步
        increment(state){       //第二个额外参数，变量，对象
            state.count++;          
        },
        decrease(state){
            state.count--;
        }
    },
    getters:{
        filternumber:state => {
            return state.list.filter(item => item < 10);
        }
    },
    actions:{
        increment(context){
            context.commit('increment');
        }
    }
});

new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App)
});