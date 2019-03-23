import Vue from 'vue';
import App from './App.vue';
import ivSlider from './iv-slider'
Vue.use(ivSlider);

new Vue({
  el: '#app',
  render: h => h(App)
});