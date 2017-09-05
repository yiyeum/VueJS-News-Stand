import Vue from 'vue'
import Navigation from './Navigation.vue'
import BBC from './BBC.vue'
import Footer from './Footer.vue'

new Vue({
  el: '#app',

    components:{
        'kt-nav' : Navigation,
        'kt-bbc' : BBC,
        'kt-footer' : Footer
    }
})
