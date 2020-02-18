<template>
    <div id="list">
        <div class="content">
                 <div class="item"  v-for='item in products' @click='goDetail(item)'>
                 <div style="background-image:url(http://114.215.172.115:8080/img/14ce36d3d539b6003ba874c9e550352ac65cb76d.jpg);background-size:100%;"></div> 
                  <div><img :src="root+item.imgurl" class="img"></img></div>
                    <div class="title">{{item.name}}</div>
                    <div class="money">￥{{item.price}}</div>
                </div>
                
            
            </div>
    </div>
</template>
<script>
export default {
    name:'List',  
    data(){
        return {
			root:'http://114.215.172.115:8080/CakeShopping'
		}
    },
    props:['products'],
	methods:{
		goDetail(item){
			this.$router.push({name:'productDetail',params:{id:item.id,imgurl:item.imgurl,name:item.name,pnum:item.pnum,price:item.price}})//this.$route.params
		}
	}
}
</script>
<style lang="less" scoped>
@import url('../../style/main.less');  
#list{      
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
            .h(200);
            img{
                width:100%;
                .h(150);
                background-size:100%;
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
</style>