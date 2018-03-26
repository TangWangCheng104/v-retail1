// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import './assets/js/bootstrap.min.js'
//import './assets/css/bootstrap.min.css'
//<!-- Bootstrap -->
//  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
//  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
//  <!-- [if lt IE 9] -->
//  <!-- ie8支持html5 -->
import html5shiv from './assets/js/html5shiv.min.js'	
import respond from './assets/js/respond.min.js'		
		
//  <!-- ie8支持css3 -->
import selectivizr from './assets/js/selectivizr-min.js'		
//公共样式
//import bootstrapcss from './assets/css/bootstrap.min.css'		
import basecss from './assets/css/base.css'		

//js引入
import $ from 'jquery'		
import lazyload from './assets/js/jquery.lazyload.js'		
import bootstrap from './assets/js/bootstrap.min.js'		
import validate from './assets/js/jquery.validate.min.js'		
import messages from './assets/js/messages.js'		
import hammer from './assets/js/hammer.min.js'		
import jqueryhammer from './assets/js/jquery.hammer.js'		
import loginVerify from './assets/js/loginVerify.js'		
import app_product from './assets/js/app_product.js'		
import retail_cofirmBuying from './assets/js/retail_cofirmBuying.js'	
import kandan from './assets/js/kandan.js'		


Vue.config.productionTip = false;

/* eslint-disable no-new */

let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
