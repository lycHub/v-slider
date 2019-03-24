import Vue from 'vue';
import App from './App.vue';
import ivSlider from 'iv-slider';
Vue.use(ivSlider);

import './plugins/element.js';
import 'element-ui/lib/theme-chalk/index.css';


new Vue({
  el: '#app',
  render: h => h(App)
});