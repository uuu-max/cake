<template>
    <div id="categray">
        <Header title="分类"></Header>
        <div class="box">
            <div class="left">
                <ul>
                    <li v-for="(item, index) in selnav" :key="index"
                    	@click='sel(item.class)'
                        :class="selected==item.class?'navsel':''">
                    {{item.name}}
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class='right-box animated '
					:class="selected">
                    <div class='categray-box' v-for='(item,index) in selnav'>
                        <div class='categrayDetail-box'>
                        	<div class='img'>
							      <div class="i" style="background-image:url(./static/o7.jpg);background-size:100%;" ></div>
						    </div>
                            <div class='categray-title'><span>蛋糕</span></div>
                            <div class='list-box'>
                                <div v-for='item in 22' @click='goDetail(item)'>
                                    <div class="im" style="background-image:url(./static/o2.jpg);background-size:100%;" ></div>
                                    <span>顶级好蛋糕 16寸</span>
                                </div>
                                
							</div>
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
          selected:'categray1',
			selnav:[
                {name:'玛芬蛋糕',class:'categray1'},
                {name:'海绵蛋糕',class:'categray2'},
                {name:'戚风蛋糕',class:'categray3'},
                {name:'天使蛋糕',class:'categray4'},
                {name:'重油蛋糕',class:'categray5'},
                {name:'芝士蛋糕',class:'categray6'},
                {name:'蒸蛋糕',class:'categray7'},
                {name:'抹茶蛋糕',class:'categray8'},
            ]
      }
  },
  	methods:{
		sel(item){
			this.selected=item
		},
		goDetail(item){
			//this.$router.push({path:'goodsdetail/123'})
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
             .right-box{
                 height:100%;
                 .categray-box{
                     height:100%;
                     .categrayDetail-box{
                        height: 100%;
                        overflow-y: scroll;
                        .fs(16);
                        .w(270); 
                        margin:0px auto;
                        .img{
                            width: 100%;
                            .i{
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
                                display: flex;
                                flex-wrap:wrap;
                                align-content: flex-start;
                                div{
                                    .w(90);
                                    .h(110);
                                    .p_b(10);
                                    // background: blue;
                                    display: flex;
                                    flex-direction:column;
                                    justify-content: space-between;
                                    align-items: center;
                                    .im{
                                        .w(65);
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
                 .animated{
				transition: all 500ms ease-in-out;
		}
        .categray1{
				transform:translate(0,0%);
        }
        .categray2{
            transform:translate(0,-100%);
        }
        .categray3{
            transform:translate(0,-200%);
        }
        .categray4{
            transform:translate(0,-300%);
        }
        .categray5{
            transform:translate(0,-400%);
        }
        .categray6{
            transform:translate(0,-500%);
        }
        .categray7{
            transform:translate(0,-600%);
        }
        .categray8{
            transform:translate(0,-700%);
        }
    }
     
    }
    
}
</style>