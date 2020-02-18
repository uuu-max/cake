<template>
    <div id="shop">
        <Header title="购物车" :back="back"></Header>
        <div class="content">
            <div class="header">
                  <van-checkbox v-model="checked" checked-color="#f44336" @click="allItem(checked)"></van-checkbox><span class="title">蛋糕精选</span>
                  <div class="right">
                     <van-icon name="info-o" />
                    <span>已免运费</span>
                  </div>
            </div>
            <div class="list">
                <van-card
                v-for="item in cars"
                 :key="item.id"
                :price="item.price"
                :desc="item.dec"
                :title="item.name"
                :thumb="root+item.imgurl"
                >
                    <div slot="tags" class="check">
                      <van-checkbox v-model="item.check" checked-color="#f44336" @click="selectItem(item)"></van-checkbox>
                    </div>
                    <div slot="footer">
                        <button @click="remItem(item)">-</button>
                        <span>{{item.num}}</span>
                        <button  @click="addItem(item)">+</button>
                    </div>
                </van-card>
            </div>  
           
            <div class="like">
                 <div class="list">
                
                   
                    <div class="t">更多热卖</div>          
                    <div class="content">
                            <div class="item">
                             <div style="background-image:url(./static/o1.jpg);background-size:100%;" class="img"></div>
                            <div class="title">好美味的蛋糕</div>
                            <div class="money">￥55</div>
                        </div>
                        <div class="item">
                             <div style="background-image:url(./static/o1.jpg);background-size:100%;" class="img"></div>
                            <div class="title">好美味的蛋糕</div>
                            <div class="money">￥55</div>
                        </div>
                        <div class="item">
                             <div style="background-image:url(./static/o1.jpg);background-size:100%;" class="img"></div>
                            <div class="title">好美味的蛋糕</div>
                            <div class="money">￥55</div>
                        </div>
                        <div class="item">
                            <div style="background-image:url(./static/o1.jpg);background-size:100%;" class="img"></div>
                            <div class="title">好美味的蛋糕</div>
                            <div class="money">￥55</div>
                        </div>
                       
                      
                    </div>
                    
                </div>
            </div>
         
            <van-submit-bar
            :price="all*100"
            button-text="提交订单"
            @submit="onSubmit"
            >
                <van-checkbox v-model="checked" checked-color="#f44336" @click="allItem(checked)">全选</van-checkbox>
                <span slot="tip">
                    你的收货地址不支持同城送, <span>修改地址</span>
                </span>
            </van-submit-bar>
          
          
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import { mapState, mapGetters ,mapActions} from "vuex";
import Header from 'common/Header'
import TabBar from 'common/TabBar'
import Vue from 'vue';
import { Card ,Checkbox, CheckboxGroup,SubmitBar } from 'vant';

Vue.use(Card).use(Checkbox).use(CheckboxGroup).use(SubmitBar);
export default {
    name:'Shop',
     components:{Header,TabBar},
    data(){
        return{
            root:'http://114.215.172.115:8080/CakeShopping',
            checked: true,
            back:""
           
        }
    },
      created() {
        this.back = this.$route.params
        console.log(this.$store);
        var arr = this.cars.filter(function (item) {
          
                return item.check==false;
                  
        });
        console.log(arr)
        if(arr.length!==0){
            this.checked=false
        }else{
             this.checked=true
        }
   
  },
  updated() {
      var arr = this.cars.filter(function (item) {
          
                return item.check==false;
                  
        });
        console.log(arr)
        if(arr.length!==0){
            this.checked=false
        }else{
             this.checked=true
        }
  },
  methods: {
      onSubmit(){
        this.$router.push({name:'address'})//this.$route.params
      },
      
    
    ...mapActions(['addItem','remItem','allItem','selectItem'])
  },
  computed: {
   ...mapState({
			cars:state => state.shopcar.cars
		}),
	...mapGetters(['all'])
  }
}
</script>
<style lang="less" scoped>
@import url('../../../style/main.less');
#shop{
    .content{
        overflow:hidden;
         background:#fafafa;
        .m_t(45);
        .p_b(100);
        .header{
            .van-checkbox{
                float:left;
            }
            .title{
                .m_l(10);
            }
            .fs(14);
            background:white;
            .margin(10,10,0,10);
            .padding(5,5,5,5);
            .right{
                float:right;
                display:flex;
                align-items:Center;
                .fs(12);
                color:#646566;
            }
        }
        .list{
            
            .padding(0,10,10,10);
            background:#fafafa;
    
            
            .van-card{
                background:white;
                .p_l(38);
            }
            .van-card:not(:first-child){
                margin-top:0;
            }
            .van-card__price{
                color:#b71c1c;
            }
            .check{
                position:relative;
                .right(122);
            }
            .van-card__footer{
                position:relative;
                .top(-26);
                
                button{
                    border:0;
                    background:white;
                    .fs(18);
                    font-weight:600;
                }
                span{
                    display:inline-block;
                    .h(16);
                    .w(16);
                    text-align:center;
                    background:#fafafa;
                }
            }
        }
        .like{
            background:white;
             .list{
                 .img{
                       width:100%;
                    .h(120);
                    background-size:100%;
                    background-repeat:no-repeat;
                 }
                background:white;
                .t{
                    .fs(16);
                    .h(50);
                    .lh(50);
                     color:#979797;
                    text-align: center;
                }
               .t::before,.t::after{
                            content:'';
                            display: inline-block;
                            .w(35);
                            .h(1);
                            position: relative;
                            .top(-6);
                            margin:0px 15px;
                            background:#979797;
				}
                .content{
                    .margin(0,0,0,0);
                    .padding(0,12,10,12);
                
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-around;
                    background:white;
                }
                
            
                .item{
                    border-radius:10px;
                    .m_b(10);
                    background-color:white;
                    width:45%;
                    .h(160);
                    img{
                        width:100%;
                        .h(150);
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
        .van-submit-bar{
            bottom:50px;
        }
    }
}
</style>