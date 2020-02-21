<template>
    <div id="banner">
        <van-swipe :autoplay="4000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <div><img :src="image"/></div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>

export default {
    name:'Banner',
    data(){
        return{
            images: [
                    './static/q1.jpg',
                    './static/q2.jpg',
                    './static/q3.jpg',
                    './static/q4.jpg',
                    './static/q5.jpg',
                    './static/q6.jpg',
                    './static/q7.jpg'
                ]
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../../style/main.less');
#banner{
     

    div{

        .h(200);
        .w(375);
        
        img{  
            width:100%;
            height:100%;   
        }
    }
}
</style>