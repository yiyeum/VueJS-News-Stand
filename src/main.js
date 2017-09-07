import Vue from 'vue'
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'
import Router from 'vue-router'
import {routes} from './routers'


Vue.use(Router);
const router = new Router({routes});

new Vue({
  el: '#app',
    router,
    components:{
        'kt-nav' : Navigation,
        'kt-footer' : Footer
    }
})
