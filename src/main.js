import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import main from './styles/main.scss'
import grid from '@/styles/grid.scss'
import VueSplide from '@splidejs/vue-splide';
import TheRouter from '@/components/TheRouter'
import VueAwesomePaginate from "vue-awesome-paginate";
import VueCookies from 'vue3-cookies'
import { globalCookiesConfig } from "vue3-cookies";
import Maska from 'maska'
// import Paginate from "vuejs-paginate-next";


globalCookiesConfig({
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLQG89R3Dapw5SAICBh4-B6fr8rL8IfD8",
  authDomain: "vue-eltech-auth.firebaseapp.com",
  projectId: "vue-eltech-auth",
  storageBucket: "vue-eltech-auth.appspot.com",
  messagingSenderId: "342204333629",
  appId: "1:342204333629:web:12aebae7efa419d94a3454"
};

initializeApp(firebaseConfig);

createApp(App)
.use(VueSplide)
.use(main)
.use(grid)
.use(store)
.use(router)
.use(VueAwesomePaginate)
.use(Maska)
.use(VueCookies, {
    expireTimes: "30d",
    path: "/",
    secure: true,
    sameSite: "None"
})
.component('TheRouter', TheRouter)
.mount('#app')

