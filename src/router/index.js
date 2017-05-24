import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Read from 'components/read'
import Productlist from 'components/Productlist'
import resource from 'vue-resource'
import Product from 'components/Product'
import Login from 'components/login'
import Select from 'components/select'
import Nav from 'components/Nav'
import Plan from 'components/Plan'
import Error from 'components/Error'
import Register from 'components/register'
import Detail  from 'components/Detail'
import {constants, login} from "../store/types"
import util from "../util/util"
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(Router)
Vue.use(resource)

const router = new Router({
routes: [
        {
        path: '/',
        name: '/',
        component: Home,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            title: '首页',
            navShow: true
        }
    },
    {
        path: '/login',
        component: Login,
        hidden: true,
        meta: {
            title: '登录页面',
            navShow: false
        }
    }, 
    {
       path: '/reg',
        name: 'register',
        component: Register,
        meta: {
            title: '注册页面',
            navShow: false
        }
    },
    {
        path: '/foo',
        name: 'Read',
        component: Read,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            title: '每日一读',
            navShow: true
        }
    },
     {
        path: '/list',
        name: 'Productlist',
        component: Productlist,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            title: '列表页',
            navShow: true
        }
    },
    {
        path: '/list/:id',
        name: 'Detail',
        component: Detail,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            title: '详情页',
            navShow: true
        }
    },
     {
        path: '/gu',
        name: 'Product',
        component: Product,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            title: '列表页',
            navShow: true,
        }
    }, {
        path: '/pl',
        name: 'Plan',
        component: Plan,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            title: '学习管理',
            navShow: true
        }
    }, {
        path: '/404',
        name: 'error',
        component: Error,
        meta:{
            title:'404',
            navShow: false
        }
    }
]
});
router.beforeEach((to, from, next) => {
document.title = to.meta.title
next()
if (!to.matched.length) {
    next({
        name: 'error',
        params: {
            msg: "没有发现该页面，请检查你的网址是否正确"
        }
    });
}

    if (to.matched.some(r => r.meta.requireAuth)) {  // 判断该路由是否需要登录权限
        if(router.app.$store.state.login.isLogin){
    next();
}
    else{
        const token = sessionStorage.getItem(constants.USER_TOKEN);
        if (token) {  // 通过vuex state获取当前的token是否存在
        next();
    }
    else {
        next({
            path: '/login',
            query:{redirect:encodeURIComponent(to.path)} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
    }
}
    } 
    else {
    next();
}

});
export default router;
