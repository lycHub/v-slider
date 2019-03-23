import Vue from 'vue';
import App from './App.vue';
import VSlider from './lib'
Vue.use(VSlider);

new Vue({
  el: '#app',
  render: h => h(App)
});