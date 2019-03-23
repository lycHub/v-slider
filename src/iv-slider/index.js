import VSlider from './v-slider.vue';


const plugin = {};
plugin.install = function (Vue) {
  Vue.component(VSlider.name, VSlider);
};

if (window.Vue) Vue.use(Plugin);
export default plugin;