import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from 'firebase'

import App from './App.vue'


import './backend/FirebaseConfig.js'
import users from './backend/users.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes =  [
  {
    path: '/',
    component: () => import ('./components/ListPosts.vue'),
  },
  {
    path: '/create_post',
    component: () => import ('./components/NewPost.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/post',
    component: () => import ('./components/ShowPost.vue'),
    props: (route) => ({ postid: route.query.postid }) 
  }
];

const router = new VueRouter ({
  routes
});

router.beforeEach((to, from, next) => {

  console.log (from, users);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (! users.LoggedIn()) {
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    render: h => h (App)
  }).$mount('#app');
});
