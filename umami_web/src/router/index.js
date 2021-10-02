import Vue from 'vue'
import VueRouter from 'vue-router'
import MapScreen from "../components/MapScreen";
import Profile from "../components/Profile";

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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
