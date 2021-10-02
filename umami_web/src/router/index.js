import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import HelloWorld from "../components/HelloWorld";
import Profile from "../components/Profile";

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
