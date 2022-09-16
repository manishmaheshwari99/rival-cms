import { createApp } from 'vue'
import { onAuthStateChanged } from 'firebase/auth';
import 'mosha-vue-toastify/dist/style.css'
import App from './App.vue'
import Router from './router';
import { auth, firebaseApp } from './firebase';

let app;

onAuthStateChanged( auth, user => {
  if (!app) {
    app = createApp(App)
    .use(firebaseApp)
    .use(Router)
    .mount('#app')    
  }
})

