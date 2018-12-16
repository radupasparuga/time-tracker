import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Track from '@/components/track/Track'
import Plan from '@/components/plan/Plan'
import Settings from '@/components/settings/Settings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/track',
    name: 'Track',
    component: Track
  },
  {
    path: '/plan',
    name: 'Plan',
    component: Plan
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
  ]
})
