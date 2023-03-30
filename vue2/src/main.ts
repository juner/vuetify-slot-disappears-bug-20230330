import Vue from 'vue'
import './style.css'
import App from './App.vue'
import Vuetify from "vuetify";
import * as compoents from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify, {compoents, directives});
const vuetify = new Vuetify({
    theme: {
        options: {
            customProperties: true,
        }
    }
});
new Vue({
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
