import '@mdi/font/css/materialdesignicons.css'

import 'bootstrap'
import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { CarbonIconsVue } from '@carbon/icons-vue';
import Bee32 from '@carbon/icons-vue/es/bee/32';
import PhoneFilled from '@carbon/icons-vue/es/phone--filled/32';
import Time from   '@carbon/icons-vue/es/time/32';
// @ts-ignore
import App from './App.vue'
import { bart } from './directives/ScollAnimate'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'



const root = createApp(App)

root.use(CarbonIconsVue, {
  components: {
        Bee32,
        PhoneFilled,
      Time
  },
});
root.directive('scrollanimation', bart)
root.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCSYnAG1XV7NV2-O4-Ragzj5XABXOiFUc4',
    },
})

registerGlobalComponents(root)

root
  .use(router)
  .mount('#app')
