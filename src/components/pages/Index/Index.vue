<template>
    <div id="index">
        <div class="header">
            <span class="title">蛋糕店</span>
            <div class="right">
                <div class="t left"><van-icon name="scan" /><span class="sao">扫一扫</span></div>
                <div class="t"><van-icon name="comment-o" /><span>消息</span></div>
            </div>
        </div>
        <search></search>
        <banner></banner>
        <tabbar></tabbar>
        <div class="tip">
            <div>
                <van-icon name="smile-o" />
                <span>小蛋糕自营品牌</span>
            </div>
            <div>
                <van-icon name="passed" />
                <span>快速上门服务</span>
            </div>
            <div>
                <van-icon name="gold-coin-o" />
                <span>24小时快速退款</span>
            </div>
        </div>
        <div class="list_t">
            <div>
                <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                <span>
                    玛芬蛋糕
                </span>
            </div>
            <div>
                <div style="background-image:url(./static/o5.jpg);background-size:100%;" class="img"></div>
                <span>
                    海绵蛋糕
                </span>
            </div>
             <div>
                 <div style="background-image:url(./static/o4.jpg);background-size:100%;" class="img"></div>
                <span>
                    戚风蛋糕
                </span>
            </div>
             <div>
                 <div style="background-image:url(./static/o8.jpg);background-size:100%;" class="img"></div>
                <span>
                    天使蛋糕
                </span>
            </div>
             <div>
                <div style="background-image:url(./static/o6.jpg);background-size:100%;" class="img"></div>
                <span>
                   重油蛋糕
                </span>
            </div>
             <div>
                 <div style="background-image:url(./static/o2.jpg);background-size:100%;" class="img"></div>
                <span>
                   芝士蛋糕
                </span>
            </div>
            <div>
                 <div style="background-image:url(./static/o3.jpg);background-size:100%;" class="img"></div>
                <span>
                   蒸蛋糕
                </span>
            </div>
            <div>
                 <div style="background-image:url(./static/o1.jpg);background-size:100%; background-repeat:no-repeat "  class="img"></div>
                <span>
                   抹茶蛋糕
                </span>
            </div>
        </div>
        <div class="news">
            <div class="title">每日上新</div>
            <div class="content">
                <div class="item">
                    <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                    <span>
                        玛芬蛋糕
                    </span>
                 </div>
                 <div class="item">
                    <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                    <span>
                        玛芬蛋糕
                    </span>
                 </div>
                 <div class="item">
                    <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                    <span>
                        玛芬蛋糕
                    </span>
                 </div>
                 <div class="item">
                    <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                    <span>
                        玛芬蛋糕
                    </span>
                 </div>
                 <div class="item">
                    <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                    <span>
                        玛芬蛋糕
                    </span>
                 </div>
                 <div class="item">
                    <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                    <span>
                        玛芬蛋糕
                    </span>
                 </div>
                 <div class="item">
                    <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                    <span>
                        玛芬蛋糕
                    </span>
                 </div>
                 <div class="item">
                    <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                    <span>
                        玛芬蛋糕
                    </span>
                 </div>
                 <div class="item">
                    <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                    <span>
                        玛芬蛋糕
                    </span>
                 </div>
                 <div class="item">
                    <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                    <span>
                        玛芬蛋糕
                    </span>
                 </div>
                 <div class="item">
                    <div style="background-image:url(./static/o7.jpg);background-size:100%;" class="img"></div>
                    <span>
                        玛芬蛋糕
                    </span>
                 </div>
            </div>
        </div>
        <div class="list">
            
                <div class="horizon"></div>
                <div class="t">更多热卖</div>
           
                <list :products='products'></list>
           
        </div>
    </div>
</template>
<script>
import tabbar from 'common/TabBar'
import search from 'common/Search'
import banner from './banner'
import list from 'common/List'
import Vue from 'vue';
import { Icon,Swipe, SwipeItem  } from 'vant';

Vue.use(Icon).use(SwipeItem).use(Swipe);
export default {
    name:'Index',
    components:{tabbar,search,banner,list},
    data(){
        return{
          
			products:[]
        }
    },
     methods: {
		initData(){
			
			let url='http://114.215.172.115:8080/CakeShopping/FindPageAppProductServlet'

			this.$axios.get(url)
			.then((res)=>{
				console.log(res);
				this.products=res.bean[0].ps;
                console.log(this.products);
				
			})
			.catch((err)=>{
			
				console.log(err);
			})
		}
    },
	created(){
		this.initData()
	}
}
</script>
<style lang="less" scoped>
@import url('../../../style/main.less');
#index{
    .p_b(50);
    .header{
        .h(30);
        
         .padding(10,12,10,12);
        background-color:#f44336;

        .title{
             .lh(30);
            .fs(16);
            color:white;
            float:left;
        }
        .right{
            .fs(20);
             color:white;
            display:flex;
             justify-content:flex-end;
            .t{
                .m_l(10);
                display:flex;
                flex-direction:column;
                span{
                    .fs(10);
                }
                .sao{
                    .m_l(-4);
                
                
                }
            }
          
        }
    }
    .tip{
        .h(24);
        .lh(24);
        .fs(12);
        color:#f44336;
        display:flex;
        justify-content:space-around;
        div{
            display:flex;
            align-items:center;
        }
    }
    .list_t{
        .m_b(15);
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        .fs(12);
         .img{  
            .h(80);
            border-radius:50%;
            .w(80);
            
        }
        >div{
            display:flex;
            flex-direction:column;
            align-items:center;
        }
    }
    .news{
        border-top:5px solid #ccc;
        border-bottom:5px solid #ccc;
        .h(140);
        
        .padding(10,12,10,12);
        .title{
            .fs(18);
            font-weight:600;
            .m_b(10);
        }

         .fs(12);
         .img{  
            .h(80);
            border-radius:50%;
            .w(80);
            
            
        }
        .content{
            display:flex;
            
            overflow-y: scroll;
            .item{
                 .m_r(10);
                display:flex;
                flex-direction:column;
                align-items:center;
            }
        
        }
        
    }
    .list{
        
        .t{
            .fs(16);
            .h(30);
            .lh(30);
         
           .w(150);
           background-color:white;
            margin:0 auto;
            text-align:center;
        }
          .horizon {
            .w(300);
            height: 1px;
            background-color: #fafafa;
            vertical-align: middle;
            position: relative;
            .top(15);
            margin: 0 auto;
            z-index:-99;
        }
        .content{
             .padding(10,12,10,12);
            background-color: #fafafa;
            display:flex;
            flex-wrap:wrap;
            justify-content:space-around;
        }
        
       
        .item{
            border-radius:10px;
            .m_b(10);
            background-color:white;
            width:45%;
            .h(160);
            .img{
                width:100%;
                .h(120);
            }
            .title{
                .fs(14);
            }
            .money{
                .fs(12);
                color:#c62828;
            }

        }
    }
}    
</style>