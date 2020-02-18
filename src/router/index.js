import Vue from 'vue'
import Router from 'vue-router'

import Index from 'pages/Index/Index'
import Category from 'pages/Category/Category'
import Find from 'pages/Find/Find'
import Shop from 'pages/Shop/Shop'
import My from 'pages/My/My'
import ProductDetail from 'pages/ProductDetail/ProductDetail'
import Address from 'pages/Address/Address'
import OrdersDetail from 'pages/OrdersDetail/OrderDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/index"},//路由的重定向
    {name:'index',path:'/index',component:Index},
    {path:'/category',component:Category},
    {path:'/my',component:My},
    {path:'/find',component:Find},
    {name:'shop',path:'/shop',component:Shop},
    {name:'productDetail',path:'/productDetail',component:ProductDetail},
    {name:'address',path:'/address',component:Address},
    {name:'ordersDetail',path:'/ordersDetail',component:OrdersDetail}
  ]
})
