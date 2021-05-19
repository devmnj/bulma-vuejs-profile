import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
Vue.config.productionTip = false
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

// library.add(faFontAwesome)
// import icons from "v-svg-icons";

// library.add(faFontAwesome)
// library.add(faUserSecret)
// Vue.component("icon", icons);
// Vue.component('font-awesome-icon', FontAwesomeIcon)

import OhVueIcon from "oh-vue-icons";

import { FaFlag, RiZhihuFill, MdFacebook, OiOctoface, BiTwitter, FaWordpress } from "oh-vue-icons/icons";

OhVueIcon.add(FaFlag, RiZhihuFill, MdFacebook, OiOctoface, BiTwitter, FaWordpress);

Vue.component("v-icon", OhVueIcon);
new Vue({
  render: h => h(App),
}).$mount('#app')
