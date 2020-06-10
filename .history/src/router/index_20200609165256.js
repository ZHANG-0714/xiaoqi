import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Administration from '../views/Administration'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/Home',
    redirect:'/'
  },
  {
    path: '/',
    name: 'Administration',
    component:Administration,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to,from,next) =>{
  document.title = to.meta.title
  let name = localStorage.getItem('name')
  if(to.path == '/Signin'){
    next()
  } else{
    name ? next() : next('/Signin')
  }
})


export default router
