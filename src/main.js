import Vue from 'vue';
import './cube-ui';
import "./register"
import App from './App.vue';
import 'common/stylus/index.styl';

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount('#app');