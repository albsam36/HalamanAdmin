import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ArgonDashboard from "./plugins/argon-dashboard";
import firebase from 'firebase'
import "element-plus/lib/theme-chalk/index.css";


let config = {
    apiKey: "AIzaSyBxPemPIXRlqExrVdnnTxOPvJqD9b0Sw6A",
    authDomain: "analitica-dev2.firebaseapp.com",
    databaseURL: "https://analitica-dev2.firebaseio.com",
    projectId: "analitica-dev2",
    storageBucket: "analitica-dev2.appspot.com",
    messagingSenderId: "811817140779",
    appId: "1:811817140779:web:ee2c05eb21304736f5206e"
  };
firebase.initializeApp(config);

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
