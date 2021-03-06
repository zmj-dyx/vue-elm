import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from "@/router/router";
import bottomTag from "@/components/bottom"
import {
    faHome,
    faCompass,
    faFileText,
    faUser,
    faSortDesc

} from '@fortawesome/free-solid-svg-icons';

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('bottom', bottomTag)
library.add(
    faHome,
    faCompass,
    faFileText,
    faUser,
    faSortDesc
);

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
