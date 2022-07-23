import '@mdi/font/css/materialdesignicons.css'

import 'bootstrap'
import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'



const root = createApp(App)

root.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCSYnAG1XV7NV2-O4-Ragzj5XABXOiFUc4',
    },
})

registerGlobalComponents(root)

root
  .use(router)
  .mount('#app')
