import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Hello from 'components/Hello'
import Test from 'components/Test'
import Productlist from 'components/Productlist'
import Product from 'components/Product'
import Login from 'components/login'
import Select from 'components/select'
import Nav from 'components/nav'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/foo',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/bar',
            name: 'Test',
            component: Test
        },
        {
            path: '/list',
            name: 'Productlist',
            component: Productlist
        },
        {
            path: '/gu',
            name: 'Product',
            component: Product
        },
        {
            path: '/se',
            name: 'Select',
            component: Select
        },
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '*',
            redirect: '/Home'
        }
    ]
})