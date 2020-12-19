require('./bootstrap');




import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './App.vue';
import Home from "./components/pages/Home";


const routes = [
    { path: '/', component: Home },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')



