<template>
    <div id="my">
        <div class="content">
            <div class="header">
                <div class="tip">
                    <van-icon name="setting-o"  />
                    <van-icon name="comment-o" class="ml"/>
                </div>
                <div class="body">
                    <img src="/static/o1.jpg"/>
                    <span>大宇子</span>
                </div>
                
            </div>
            <div class="orders">
                <div class="orders_t">
                    <span>我的订单</span>
                    <span>全部订单></span>
                </div>
                <div class="orders_b">
                    <div class="item">
                       <van-icon name="card" class="red" />
                       <span>待付款</span>
                    </div>
                    <div class="item">
                        <van-icon name="logistics"class="red"  />
                        <span>待收货</span>
                    </div>
                    <div class="item">
                        <van-icon name="smile-comment" class="red" />
                        <span>待评价</span>
                    </div>
                    <div class="item">
                        <van-icon name="cash-back-record"class="red"  />
                        <span>退款/售后</span>
                    </div>
                </div>
            </div>
            <div class="orders">
                <div class="orders_t">
                    <span>我的功能</span>
                  
                </div>
                <div class="orders_b">
                    <div class="item">
                       <van-icon name="send-gift" class="yellow" />
                       <span>0张优惠卷</span>
                    </div>
                    <div class="item">
                        <van-icon name="like" class="yellow"/>
                        <span>我的收藏</span>
                    </div>
                    <div class="item">
                        <van-icon name="eye" class="yellow"/>
                        <span>浏览记录</span>
                    </div>
                    <div class="item">
                        <van-icon name="location" class="yellow"/>
                        <span>地址管理</span>
                    </div>
                </div>
            </div>

            <div class="orders he">
                <div class="orders_t">
                    <span>更多工具</span>
                  
                </div>
                <div class="orders_b x">
                    <div class="item w">
                       <van-icon name="pending-payment" />
                       <span>我的资产</span>
                    </div>
                    <div class="item w">
                        <van-icon name="ecard-pay" />
                        <span>小米钱包</span>
                    </div>
                    <div class="item w">
                        <van-icon name="question-o" />
                        <span>官方客服</span>
                    </div>
                    <div class="item w">
                        <van-icon name="shop-collect-o" />
                        <span>线下门店</span>
                    </div>
                    <div class="item w">
                      <van-icon name="gift-card-o" />
                       <span>资质证照</span>
                    </div>
                    <div class="item w">
                        <van-icon name="user-o" />
                        <span>支付人管理</span>
                    </div>
                    <div class="item w">
                       <van-icon name="flower-o" />                                      
                        <span>我要定制</span>
                    </div>
                    <div class="item w">
                        <van-icon name="smile-o" />
                        <span>协议规则</span>
                    </div>
                </div>
            </div>

        </div>
         <TabBar></TabBar>
    </div>
</template>
<script>
import TabBar from 'common/TabBar'
export default { 
    name:'My',
    components:{TabBar},
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../../style/main.less');
    #my{
        .content{
            background:#fafafa;
            .p_b(50);
            .header{
                background:#ef5350;
                color:white;
                .padding(15,10,15,10);
                
                img{
                    .w(70);
                    .h(70);
                    border-radius:50%;
                }
                .ml{
                    .m_l(12);
                }
                .fs(16);
                .tip{
                    .fs(18);
                    text-align:right;
                }
                .body{
                    display:flex;
                    align-items:center;
                    span{
                        .m_l(15);
                    }
                }
              }
            .x{
                flex-wrap:wrap;
                
            }
            .he{
                .h(200)!important;
            }

            .w{
                .h(80);
                width:25%;
            }
            .van-icon{
                .fs(28);
                .m_b(5);
            }
            .item{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    .fs(12);
            }
            .yellow{
                color:#ffc107;
            }
            .red{
                color:#c62828;
            }
            .orders{
                .h(120);
                
                background:white;
                .margin(10,10,10,10);
                .fs(14);
                .padding(0,10,10,10);
                .orders_t{
                    .h(45);
                    .lh(45);
                    :nth-child(1){
                        .fs(16);
                        font-weight:600;
                    }
                    :nth-child(2){
                        float:right;
                    }
                    border-bottom:1px solid #ccc;
                }
                
                .orders_b{
                    display:flex;
                    justify-content:space-around;
                     .m_t(15);
                }
            }
            
        }
    }
</style>