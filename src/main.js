// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import './assets/css/index.css'
import './assets/js/releases.js'
import './assets/js/scripts.js'


export default function (Vue, { router, head, isClient }) {
  Vue.mixin({
    data(){
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
  
  Vue.component('Layout', DefaultLayout);


}
