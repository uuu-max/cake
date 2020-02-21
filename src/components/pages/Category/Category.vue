<template>
    <div id="categray">
        <Header title="分类"></Header>
        <div class="box">
            <div class="left">
                <ul>
                    <li v-for="(item, index) in selnav" :key="index"
                    	@click='sel(item.class,index)'
                        :class="selected==item.class?'navsel':''">
                    {{item.name}}
                    </li>
                </ul>
            </div>
            <div class="right">
                    <div class='categray-box'>
                        <div class='categrayDetail-box'>
                        	<div class='img'>
							      <div class="i" style="background-image:url(./static/category-cake.png);background-size:100%;" ></div>
						    </div>
                            <div class='categray-title'><span>蛋糕</span></div>
                            <div class='list-box'>
                              <!--  <div v-for='item in selectedList' @click='goDetail(item)'>
                                    <img class="im" :src="item.img" ></img>
                                    <span>{{item.title}}</span>
                                </div>-->
                                <van-swipe  vertical class="swiper" ref="swiper" :style="'height:'+screeHeight" :loop="false"  @change="onChange" :show-indicators="false">
                                    <van-swipe-item class="x"  v-for="item in selnav" :key="item.id" >
                                    <div v-for='item in selectedList' :key="item.id">
                                       <img class="im" :src="item.img" ></img>
                                        <span>{{item.title}}</span> 
                                    </div>
                                    </van-swipe-item>
                                   
                                </van-swipe>
                                
							</div>
                        </div>
                    </div>
                </div>
            
        
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import Header from 'common/Header'
import TabBar from 'common/TabBar'
export default {
  name:'Categray',
  components:{Header,TabBar},
  data(){
      return{
           screeHeight:window.screen.height-220+"px",
            selected:'categray1',
            index:"0",
            selnav:[
                    {name:'玛芬蛋糕',class:'categray1'},
                    {name:'海绵蛋糕',class:'categray2'},
                    {name:'戚风蛋糕',class:'categray3'},
                    {name:'天使蛋糕',class:'categray4'},
                    {name:'重油蛋糕',class:'categray5'},
                    {name:'芝士蛋糕',class:'categray6'},
                    {name:'蒸蛋糕',class:'categray7'},
                    {name:'抹茶蛋糕',class:'categray8'},
                ],
            selectedList:
                 [
                    {img:"./static/o7.jpg",title:"玛芬蛋糕 16寸"},
                    {img:"./static/o7.jpg",title:"玛芬蛋糕 18寸"}
                ]
            ,
            list:[
                [
                    {img:"./static/o7.jpg",title:"玛芬蛋糕 16寸"},
                    {img:"./static/o7.jpg",title:"玛芬蛋糕 18寸"}
                ],
                
                 [
                    {img:"./static/o5.jpg",title:"海绵蛋糕 16寸"},
                    {img:"./static/o5.jpg",title:"海绵蛋糕 18寸"}
                ],
                 [
                    {img:"./static/o4.jpg",title:"戚风蛋糕 16寸"},
                    {img:"./static/o4.jpg",title:"戚风蛋糕 18寸"}
                ],
                 [
                    {img:"./static/o8.jpg",title:"天使蛋糕 16寸"},
                    {img:"./static/o8.jpg",title:"天使蛋糕 18寸"}
                ],
                 [
                    {img:"./static/o6.jpg",title:"重油蛋糕 16寸"},
                    {img:"./static/o6.jpg",title:"重油蛋糕 18寸"}
                ],
                 [
                    {img:"./static/o2.jpg",title:"芝士蛋糕 16寸"},
                    {img:"./static/o2.jpg",title:"芝士蛋糕 18寸"}
                ],
                 [
                    {img:"./static/o3.jpg",title:"蒸蛋糕 16寸"},
                    {img:"./static/o3.jpg",title:"蒸蛋糕 18寸"}
                ],
                 [
                    {img:"./static/o1.jpg",title:"抹茶蛋糕 16寸"},
                    {img:"./static/o1.jpg",title:"抹茶蛋糕 18寸"}
                ]


            ]

            
      }
  },
  	methods:{
		sel(item,index){
			this.selected=item;
            this.selectedList=this.list[index];
            this.index=index;
            this.$refs.swiper.swipeTo(this.index)
           
		},
         onChange(index) {
             this.index=index;
            this.selected=this.selnav[index].class;
             this.selectedList=this.list[index]
        }
	}
}
</script>
<style lang="less" scoped>
@import url('../../../style/main.less');
#categray{
    .box{
        position:fixed;
        .w(375);
        .top(45);
		.bottom(50);
        display:flex;
        
         .left{
             .w(75);
              height:100%;
              border-right:1px solid #D8d8D8;
              box-sizing: border; 
             .fs(14);
             li{
                .w(75);
          		.h(40);
          		.lh(40);
                text-align:center;
          		box-sizing:border;
          		border-left:2px solid #fff; 
             }
             	.navsel{
          		border-left:2px solid #b71c1c;
          		color:#ef5350; 
          	}

         }
         .right{
             .w(300);
             height:100%;
                   .categray-box{            
                     height:100%;
                     .categrayDetail-box{
                        height: 100%;         
                        .fs(16);
                        .w(270); 
                        margin:0px auto;
                        .img{
                            width: 100%;
                            .h(80);
                            .i{
                                .h(80);
                                width: 100%;
                            }
				    	}
                        .categray-title{
                            .h(35);
                            .lh(35);
                            color:#b71c1c;
                            text-align: center;
				    	}
                        .categray-title span::before,.categray-title span::after{
                            content:'';
                            display: inline-block;
                            .w(35);
                            .h(1);
                            position: relative;
                            .top(-6);
                            margin:0px 15px;
                            background:#979797;
					    }
                        	.list-box{                           
                                width: 100%;                                 
                                }
                                .swiper{
                                    .w(270); 
                                }
                                 .van-swipe-item{
                                        display: flex;
                                        flex-wrap:wrap;
                                        align-content: flex-start; 
                                    div{
                                        .w(90);
                                        .h(110);
                                        .p_b(10);
                                        
                                        display: flex;
                                        flex-direction:column;
                                        align-items: center;
                                        .im{
                                            .w(65);
                                            background-size:100%;
                                        }
                                        span{
                                            .fs(14);
                                            text-align: center;
                                        }
                                    }
                                }
                         
                     }
                 }
             
             
    }
     
    }
    
}
</style>