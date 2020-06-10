import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Administration from '../views/Administration'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    redirect:'/'
  },
  {
    path: '/',
    component:Administration,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home  //首页
      },
      {
        path: '/Published',
        name: 'Published',
        component: () => import('../views/Published.vue')  //已发布
      },
      {
        path: '/Statistics',
        name: 'Statistics',
        component: () => import('../views/Statistics.vue')  //统计
      },
      {
        path: '/Publish',
        name: 'Publish',
        component: () => import('../views/Publish.vue')  //发表文章
      },
      {
        path: '/Tab',
        name: 'Tab',
        component: () => import('../views/Tab.vue')  //标签页
      },
      {
        path: '/Excel',
        name: 'Excel',
        component: () => import('../views/Excel.vue')  //导出excel
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
    component: () => import('../views/Register.vue')  //注册
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue')  //登录
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
let whitePath = ['/Signin', '/register']
router.beforeEach((to,from,next) =>{
  document.title = to.meta.title
  let user = localStorage.getItem('user')
  if(whitePath.includes(to.path)){
    next()
  } else{
    user ? next() : next('/Signin')
  }
})


export default router
