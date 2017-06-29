
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import {sync} from 'vuex-router-sync';
import router from './router'
import Element from 'element-ui'
import store from './store';
import 'element-ui/lib/theme-default/index.css'


sync(store, router);

Vue.use(Element)
    /* eslint-disable no-new */
Vue.http.options.emulateJSON=true;
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})