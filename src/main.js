import {createApp} from 'vue';
import Antd from 'ant-design-vue';
import Store from "./store";
import App from './App.vue'
import router from "./router";
import 'ant-design-vue/dist/antd.css';
import './tailwind.css';
import '../registerModuleRouter';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import 'remixicon/fonts/remixicon.css'
import PrimeVue from 'primevue/config';

const app = createApp(App)
app.component('QuillEditor', QuillEditor)
app.use(Antd)
    .use(router)
    .use(Store)
    .use(PrimeVue)
    .mount('#app')
