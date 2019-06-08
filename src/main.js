import Vue from 'vue';
import App from './views/App/App';
import router from './router';

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app');
