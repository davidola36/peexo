import Vue from 'vue'
import App from './App.vue';
import Vuetify from 'vuetify';




Vue.config.productionTip = false
Vue.use(Vuetify)
export default new Vuetify({ })

new Vue({
  render: h => h(App),
  vuetify: new Vuetify(),
}).$mount('#app')
