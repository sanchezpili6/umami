import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps"

import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDcMj47A_di0mrF2z0QIT6J-9JCFZFjVBI",
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
