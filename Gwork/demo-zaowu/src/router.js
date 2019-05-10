import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'

Vue.use(Router)
// 每一个路由可以携带一个对象 ,可以携带一些标识符

var router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { 
        footerShow:true //如果携带的有原信息.显示
       }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
     {
       path: '/kind',
       name: 'kind',
       component: () => import( /* webpackChunkName: "kind" */ './views/kind/Kind.vue') ,
       meta: {
         footerShow: true //如果携带的有原信息.显示
       }
     },
       {
         path: '/kind/:id/goodKind',
         name: 'goodKind',
         component: () => import( /* webpackChunkName: "goodKind" */ './views/kind/goodsKind/goodKind.vue'),
          meta: {
            footerShow: true //如果携带的有原信息.显示
          }
       },
      {
         path: '/kind/:id/goodKind/:id/otherkind',
         name: 'otherkind',
         redirect: '/otherkind/kindshop',
         component: () => import( /* webpackChunkName: "goodKind" */ './views/kind/goodsKind/otherkind/otherkind.vue'),
         children:[
           {
             path: '/otherkind/details',
             name: 'details',
             component: () => import( /* webpackChunkName: "goodKind" */ './views/kind/goodsKind/otherkind/details/Details.vue'),
           },
           {
             path: '/otherkind/kindShop',
             name: 'kindShop',
             component: () => import( /* webpackChunkName: "goodKind" */ './views/kind/goodsKind/otherkind/kindshop/KindShop.vue'),
           },
         ]
       }, 
       
       {
         path: '/find',
         name: 'find',
         redirect: '/find/Article',
         component: () => import( /* webpackChunkName: "find" */ './views/find/Find.vue'),
         meta: {
           footerShow: true //如果携带的有原信息.显示
         },
         children:[
           {
             path: '/find/Article',
             name: 'Article',
             component: () => import( /* webpackChunkName: "Article" */ './views/find/article/Article.vue'),
              meta: {
             footerShow: true //如果携带的有原信息.显示
                },
           },
            {
              path: '/find/Recommend',
              name: 'Recommend',
              component: () => import( /* webpackChunkName: "Recommend" */ './views/find/recommend/Recommend.vue'),
               meta: {
               footerShow: true //如果携带的有原信息.显示
                },
            },
         ]
       },
        {
          path: '/main',
          name: 'main',
          component: () => import( /* webpackChunkName: "main" */ './views/main/Main.vue'),
          meta: {
            footerShow: true //如果携带的有原信息.显示
          }
        },
        {
          path:'*',
          redirect: '/home'          
        }

  ]
})


router.beforeEach((to, from, next) => {
    //  console.log('to',to)
    //  console.log('from',from)
     next()
     
  
})


export default router;