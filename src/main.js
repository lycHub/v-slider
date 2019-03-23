import Vue from 'vue';
import App from './App.vue';
import ivSlider from '../index'
Vue.use(ivSlider);

new Vue({
  el: '#app',
  render: h => h(App)
});