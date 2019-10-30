import Vue from 'vue'
import App from './App.vue';
import {router} from './router/main.js';

Vue.config.devtools = true
Vue.config.productionTip = false;
Vue.config.performance = true;


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
