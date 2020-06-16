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
        component: Home,  //首页
        meta:{
          title:"首页"
        }
      },
      {
        path: '/Paging',
        name: 'Paging',
        component: () => import('../views/Paging.vue'),  //分页表格
        meta:{
          title:"分页表格"
        }
      },
      {
        path: '/Published',
        name: 'Published',
        component: () => import('../views/Published.vue'),  //已发布
        meta:{
          title:"已发布"
        }
      },
      {
        path: '/Edit',
        name: 'Edit',
        component: () => import('../views/Edit.vue'),  //编辑
        meta:{
          title:"编辑"
        }
      },
      {
        path: '/See',
        name: 'See',
        component: () => import('../views/See.vue'),  //查看
        meta:{
          title:"查看"
        }
      },
      {
        path: '/Statistics',
        name: 'Statistics',
        component: () => import('../views/Statistics.vue'),  //统计
        meta:{
          title:"统计"
        }
      },
      {
        path: '/Publish',
        name: 'Publish',
        component: () => import('../views/Publish.vue'),  //发表文章
        meta:{
          title:"发表文章"
        }
      },
      {
        path: '/Tab',
        name: 'Tab',
        component: () => import('../views/Tab.vue'),  //标签页
        meta:{
          title:"标签页"
        }
      },
      {
        path: '/Excel',
        name: 'Excel',
        component: () => import('../views/Excel.vue'),  //导出excel
        meta:{
          title:"导出excel"
        }
      },
      {
        path: '/Picture',
        name: 'Picture',
        component: () => import('../views/Picture.vue'),  //图片上传
        meta:{
          title:"图片上传"
        }
      },
      {
        path: '/signOut',
        name: 'signOut',
        component: () => import('../views/signOut.vue'),  //退出系统
        meta:{
          title:"退出系统"
        }
      },
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),  //注册
    meta:{
      title:"注册"
    }
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue'),  //登录
    meta:{
      title:"登录"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
