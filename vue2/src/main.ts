import Vue from 'vue'
import './style.css'
import App from './App.vue'
import Vuetify from "vuetify";
import * as compoents from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

Vue.use(Vuetify, {compoents, directives});
const vuetify = new Vuetify({
    icons: {
        iconfont: "mdi",
    },
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
