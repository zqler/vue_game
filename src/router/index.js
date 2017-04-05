import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Hello from 'components/Hello'
import Productlist from 'components/Productlist'
import resource from 'vue-resource'
import Product from 'components/Product'
import Login from 'components/login'
import Select from 'components/select'
import Nav from 'components/Nav'
import Plan from 'components/Plan'
import { constants, login } from "../store/types"
import util from "../util/util"
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(Router)
Vue.use(resource)

const router = new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/foo',
            name: 'Hello',
            component: Hello,
            meta: {
                requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/list',
            name: 'Productlist',
            component: Productlist,
            meta: {
                requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/gu',
            name: 'Product',
            component: Product,
            meta: {
                requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/pl',
            name: 'Plan',
            component: Plan,
            meta: {
                requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        next({ name: 'error', params: { msg: "not found view" } });
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (router.app.$store.state.login.isLogin) {
            next();
        } else {
            const token = sessionStorage.getItem(constants.USER_TOKEN);
            Vue.http.headers.common['UserToken'] = String(token);
            router.app.$store.dispatch(login.CHECK_TOKEN).then(() => {
                const state = util.getStorage(constants.SAVE_STORE_KEY, true);
                if (state) {
                    router.app.$store.replaceState(state);
                    if (/\/login/.test(to.path)) {
                        next({ path: '/' })
                    } else {
                        next({ path: to.path, query: to.query, params: to.params });
                    }
                } else {
                    next({ path: '/login', query: { redirect: encodeURIComponent(to.path) } });
                }
            }, () => {
                next({ path: '/login', query: { redirect: encodeURIComponent(to.path) } });
            });
        }
    } else {
        next();
    }

});
export default router;