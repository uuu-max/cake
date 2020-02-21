<template>
    <div id="header">
        <van-nav-bar 
        v-if="back"
        :title="title"
        left-arrow
        fixed
        @click-left="onClickLeft"
        />
        <van-nav-bar 
        v-else
        :title="title"
    
        fixed
        @click-left="onClickLeft"
        />
    </div>
</template>
<script>


export default {
    name:'Header',
    data(){
        return{

        }
    },
    props:['title','back'],
    methods: {
        onClickLeft() {
            this.$router.go(-1)
            }
     }
}
</script>
<style lang="less" scoped>
    
</style>