import Vue from 'vue'
import VueRouter from 'vue-router'
import MapScreen from "../components/MapScreen";
import Profile from "../components/Profile";
import HomePage from "../components/HomePage";
import Achievements from "../components/Achievements";

Vue.use(VueRouter)

const routes = [
  {
    path: '/map',
    name: 'map',
    component: MapScreen
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: Achievements
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
