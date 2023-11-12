import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import theButtons from "./components/theButtons.vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight,faCheckDouble} from '@fortawesome/free-solid-svg-icons';
//import VueTypedJs from 'typed.js'
library.add(faArrowRight,faCheckDouble);
const app=createApp(App);
app.component("the-button",theButtons)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use (store)

app.mount('#app');
