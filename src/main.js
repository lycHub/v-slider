import Vue from 'vue';
import App from './App.vue';
import ivSlider from 'iv-slider';
import './plugins/element.js';
Vue.use(ivSlider);

import 'element-ui/lib/theme-chalk/index.css';


new Vue({
  el: '#app',
  render: h => h(App)
});