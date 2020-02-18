<template>
    <div id="orderDetail">
        <Header title='填写订单' back='true'></Header>
        <div class="content">
            <van-contact-card
            type="edit"
            :name="address.name"
            :tel="address.tel"
            :editable="false"
            />
         <div class="list">
                <van-card
                v-for="item in orderlist"
                 :key="item.id"
                :price="item.price"
                :desc="item.dec"
                :title="item.name"
                :thumb="root+item.imgurl"
                >
                <div slot="footer">
                    <span>{{item.num}}</span>               
                </div>
                </van-card>
         </div>
         <div class="foot">
            <div>
                <span>商品总价</span>
                <span>￥{{all||orderlist[0].price}}</span>
            </div>
            <div>
                <span>运费</span>
                <span>￥10.00</span>
            </div>
            <div>
                <span>红包抵扣</span>
                <span>-￥1.11</span>
            </div>
         </div> 
         <van-submit-bar
            :price="all*100||orderlist[0].price*100"
            button-text="提交订单"
            @submit="onSubmit"
            /> 
        </div>  

    </div>
</template>
<script>
import Header from 'common/Header'
import { mapState, mapGetters ,mapActions} from "vuex";
import Vue from 'vue';
import { ContactCard, ContactList, ContactEdit,SubmitBar } from 'vant';

Vue.use(ContactCard);
Vue.use(ContactList);
Vue.use(ContactEdit);
Vue.use(SubmitBar);
export default {
    name:'OrderDetail',
    components:{Header},
    data(){
        return{
            root:'http://114.215.172.115:8080/CakeShopping',
            address:"",
            orderlist:[]
          
        }
    },
    methods:{
        onSubmit(){
            localStorage.removeItem("buy");
             this.$router.push({name:'index'})
        }
    },
    created(){

        this.address=JSON.parse(localStorage.address);
        console.log(this.address)
        if(localStorage.buy){
            var buy=JSON.parse(localStorage.buy);
            this.orderlist.push(buy)
        }else{
            this.orderlist=this.cars.filter(function (item) {     
                 return item.check==true;    
            });
        }
        console.log(this.orderlist)
        

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
    #orderDetail{
       
        .content{
            .m_t(45);
            .p_b(50);
           overflow-y:scroll; 
            .list{
               
                .padding(10,10,10,10);
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
                
                .van-card__footer{
                    position:relative;
                    .top(-26);
                    
                
                    span{
                        display:inline-block;
                        .h(16);
                        .w(16);
                        text-align:center;
                        background:#fafafa;
                    }
                }
            }
            .foot{
                .fs(16);
                color:#999;
                .padding(0,10,10,10);
                border: 10px solid #fafafa;
                div{
                    .h(30);
                    .lh(30);
                    :nth-child(2){
                        float:right;
                    }
                }
            }
        }
    }
</style>