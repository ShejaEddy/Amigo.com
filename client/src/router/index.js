import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import register from '@/components/register.vue'
import home from '@/components/home.vue'
import profile from '@/components/profile.vue'



Vue.use(Router)
 export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: profile
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }

  ]
})
