import Vue from 'vue'
import VueRouter from 'vue-router'
import Achievements from "../components/Achievements";
import Mushrooms from "../components/Mushrooms/Mushrooms";
import MapScreen from "../components/MapScreen";
import Profile from "../components/Profile";
import HomePage from "../components/HomePage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/achievements',
    name: 'Achievements',
    component: Achievements
  },
  {
    path: '/mymushrooms',
    name: 'MyMushrooms',
    component: Mushrooms
  },
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
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
