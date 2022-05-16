import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: () => { return import('../views/Menu.vue') },
    meta: {
      title: 'Menu'
    }
  },
  {
    path: '/Bell',
    name: 'Bell',
    component: () => { return import('../views/Bell.vue') }
  },
  {
    path: '/Song',
    name: 'Song',
    component: () => { return import('../views/Song.vue') }
  },
  {
    path: '/Time',
    name: 'Time',
    component: () => { return import('../views/Time.vue') }
  },
  {
    path: '/Reserve',
    name: 'Reserve',
    component: () => { return import('../views/Reserve.vue') }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: 'ForgotPassword'
    }
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => { return import('../views/Admin.vue') }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
