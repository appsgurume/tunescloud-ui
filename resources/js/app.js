require('./bootstrap');




import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './App.vue';
import VideoConvertor from "./components/common/VideoConvertor";


const routes = [
    { path: '/', component: VideoConvertor },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')



