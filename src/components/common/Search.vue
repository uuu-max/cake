<template>
    <form action="/">
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
           
           
        />
    </form>
</template>
<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
    data(){
        return{
            value:""
        }
      
    }
}
</script>
<style lang="less" scoped>
    
</style>