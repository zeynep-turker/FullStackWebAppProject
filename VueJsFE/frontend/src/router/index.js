import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Signup from  '../components/Signup.vue'
import ListUsers from  '../components/ListUsers.vue'
import ForgotPassword from  '../components/ForgotPassword.vue'
import ResetPassword from "../components/ResetPassword";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'ListUsers',
    component: ListUsers
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: ForgotPassword
  },
  {
    path: '/reset/:email',
    name: 'ResetPassword',
    component: ResetPassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
