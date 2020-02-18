<template>
    <van-tabbar  v-model="active"   active-color="#f44336"
  inactive-color="#000" route id="tabber">
        <van-tabbar-item
            replace
            to="/index"
            icon="home-o"
        >
            首页
        </van-tabbar-item>
        <van-tabbar-item
            replace
            to="/category"
            icon="qr-invalid"
        >
            分类
        </van-tabbar-item>
        <van-tabbar-item
            replace
            to="/find"
            icon="description"
        >
            发现
        </van-tabbar-item>
        <van-tabbar-item
            replace
            to="/shop"
            icon="shopping-cart-o"
        >
            购物车
        </van-tabbar-item>
        <van-tabbar-item
            replace
            to="/my"
            icon="user-o"
        >
            我的
        </van-tabbar-item>
    </van-tabbar>
    
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
export default {
    name:'TabBar',
    data(){
        return{
           active: 0
        }
    }
}
</script>
<style lang="less" scoped>

    
</style>