import Vue from 'vue'
import Navigation from './Navigation.vue'
import BBC from './BBC.vue'

new Vue({
  el: '#app',

    components:{
        'kt-nav' : Navigation,
        'kt-bbc' : BBC
    }
})
