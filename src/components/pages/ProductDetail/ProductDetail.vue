<template>
    <div id="productDetail">
        <Header title='商品详情' back='true'></Header>
        <div class="content">
            <img :src="root+goodsinfo.imgurl" />
            <div class="money">￥{{goodsinfo.price}}<span>起</span></div>
            <div class="name">{{goodsinfo.name}}</div>
            
            <div class="sall">
                <span class="one">发货</span>
                <span>大宇子的家</span>
                <span>月售1708</span>
            </div>
            <div class="chose" @click="Onshow()">
                <span class="one">选择</span>
                <span>选择规范</span>
            </div>
        </div>
       <van-sku
        v-model="show"
        :sku="sku"
        :goods="goodsinfo"
        :goods-id="goodsId"
        :quota="quota"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
        />
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onShop" />
            <van-goods-action-button type="warning" text="加入购物车"  color="#ef5350" @click="addCar(goodsinfo)" />
            <van-goods-action-button type="danger" text="立即购买"  color="#f44336" @click="onBuyClicked()" />
        </van-goods-action>
       
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import Header from 'common/Header'
import Vue from 'vue';
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Sku } from 'vant';
import { Toast } from 'vant';
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku);
Vue.use(Toast);
export default {
    name:"ProductDetail",
    components:{Header},
    data(){
        return{
            root:'http://114.215.172.115:8080/CakeShopping',
            show:false,
            selected:'1',
            goodsId:'',
            quota:0,
			goodsinfo:{
			},
            sku:{},
            
    
        }
    },
    methods: {
        onClickIcon() {
        Toast('点击图标');
        },
       onClickButton() {
        Toast('点击图标');
        },
        onShop(){
            this.$router.push({name:'shop',params:{back:true}})//this.$route.params
        },
        Onshow(){
            console.log("Ssss");
            this.show=true;
            console.log(this.show);
        },
        onBuyClicked(skuData){
           
           if(skuData){
                this.goodsinfo.dec=skuData.selectedSkuComb.s1+"寸"
           }
           this.goodsinfo.dec="16寸"
           localStorage.buy=JSON.stringify(this.goodsinfo)
           this.$router.push({name:'address',params:{back:true}})

           
            
        },
        onAddCartClicked(skuData){
            Toast.success('加入购物车成功');
             this.goodsinfo.dec=skuData.selectedSkuComb.s1+"寸"
            console.log( this.goodsinfo)
            this.addCar(this.goodsinfo)
        },
       
		...mapActions(['addCar'])
	    

    },
    created(){
        this.goodsinfo=this.$route.params
        this.goodsinfo.dec="16寸"
        this.goodsinfo.check=true
        this.goodsId=this.goodsinfo.id
        this.sku={
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                    k: '规格', // skuKeyName：规格类目名称
                    v: [
                        {
                        id: '20', // skuValueId：规格值 id
                        name: '20寸', // skuValueName：规格值名称
                        imgUrl: 'http://114.215.172.115:8080/CakeShopping'+this.goodsinfo.imgurl, // 规格类目图片，只有第一个规格类目可以定义图片
                        previewImgUrl: 'http://114.215.172.115:8080/CakeShopping'+this.goodsinfo.imgurl, // 用于预览显示的规格类目图片
                        },
                        {
                        id: '18',
                        name: '18寸',
                        imgUrl: 'http://114.215.172.115:8080/CakeShopping'+this.goodsinfo.imgurl,
                        previewImgUrl: 'http://114.215.172.115:8080/CakeShopping'+this.goodsinfo.imgurl,
                        },
                        {
                        id: '16',
                        name: '16寸',
                        imgUrl: 'http://114.215.172.115:8080/CakeShopping'+this.goodsinfo.imgurl,
                        previewImgUrl: 'http://114.215.172.115:8080/CakeShopping'+this.goodsinfo.imgurl,
                        }
                    ],
                    k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                    id: this.goodsinfo.id, // skuId，下单时后端需要
                    price: this.goodsinfo.price*100, // 价格（单位分）
                    s1: '20', // 规格类目 k_s 为 s1 的对应规格值 id
                    stock_num: this.goodsinfo.pnum // 当前 sku 组合对应的库存
                    },
                    {
                    id: this.goodsinfo.id, // skuId，下单时后端需要
                    price: this.goodsinfo.price*100, // 价格（单位分）
                    s1: '18', // 规格类目 k_s 为 s1 的对应规格值 id
                
                    stock_num: this.goodsinfo.pnum // 当前 sku 组合对应的库
                    },
                     {
                    id: this.goodsinfo.id, // skuId，下单时后端需要
                    price: this.goodsinfo.price*100, // 价格（单位分）
                    s1: '16', // 规格类目 k_s 为 s1 的对应规格值 id
                
                    stock_num: this.goodsinfo.pnum // 当前 sku 组合对应的库
                    }
                ],
                  
               
                price: this.goodsinfo.price, // 默认价格（单位元）
                stock_num: this.goodsinfo.pnum, // 商品总库存
                none_sku: false, // 是否无规格商品      
                hide_stock: false // 是否隐藏剩余库存
            },
		console.log(this.goodsinfo);	
	}

}
</script>
<style lang="less" scoped>
@import url('../../../style/main.less');
#productDetail{
    .p_t(45);
    .content{
        .padding(0,10,0,10);
        img{
            .h(300);
            .w(375);
        }
        .money{
            .fs(18);
            color:#b71c1c;
            span{
                .fs(12);
                color:#9e9e9e;
            }      
        }
        .name{
            
            .fs(16);
            .h(40);
            .lh(40);
            font-weight:600;
            border-bottom:10px solid #f5f5f5;
        }
        .sall{
            color:#424242;
            .fs(14);
            .h(50);
            .lh(50);
           :nth-child(3){
               float:right;
           }
        }
        .chose{
             color:#424242;
            .fs(14);
            .h(50);
            .lh(50);
            border-bottom:10px solid #f5f5f5;
        }
        .one{   
                color:#9e9e9e;
                .w(35);
                display:inline-block;
            
        }
      

    }
    
}   
</style>