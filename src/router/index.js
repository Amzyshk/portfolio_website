import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import(/* webpackChunkName: "about" */ '../views/Works.vue')
  },
  {
    path: '/project/micro',
    name: 'Micro',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/Microsoft.vue')
  },
  {
    path: '/project/ten',
    name: 'Ten',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/Tencent.vue')
  },
  {
    path: '/project/game',
    name: 'Game',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/Game.vue')
  },
  {
    path: '/project/little',
    name: 'Little',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/Little.vue')
  },
  {
    path: '/project/org',
    name: 'Org',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/Org.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach(() => {
  window.scrollTo(0,0);
  // 或
  // window.scroll(0, 0);
});

export default router
