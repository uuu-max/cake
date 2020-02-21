<template>
    <form action="/">
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
           
           
        />
    </form>
</template>
<script>

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