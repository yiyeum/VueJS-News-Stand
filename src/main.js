import Vue from 'vue'
import Navigation from './Navigation.vue'
import TIME from './TIME.vue'
import CNN from './CNN.vue'
import Footer from './Footer.vue'

new Vue({
  el: '#app',

    components:{
        'kt-nav' : Navigation,
        'kt-time' : TIME,
        'kt-cnn' : CNN,
        'kt-footer' : Footer
    }
})
