<template>
    <div id="find">
    <Header title="发现好吃"></Header>    
    <div class="content">
        <div class="header">
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
                        <div style="background-image:url(./static/o1.jpg);background-size:100%;" class="img"></div>
                    <span>
                        抹茶蛋糕
                    </span>
                </div>
            </div>
        </div>
         <div class="list">
            
                <div class="horizon"></div>
                <div class="t">同城共享</div>
                <List :products='products'></List>
            
         
           
           
        </div>

    </div>
      <TabBar></TabBar>  
    </div>
</template>
<script>
import Header from 'common/Header'
import TabBar from 'common/TabBar'
import List from 'common/List'
export default {
    name:'Find',
   components:{Header,TabBar,List},
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
 #find{
     .m_t(45);
     .header{
         background:#fafafa;
         .padding(10,10,10,10);
     }
     .list_t{
         .padding(10,10,10,10);
         background:white;
         border-radius:10px;
       
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        .fs(12);
         .img{  
            .h(75);
            border-radius:50%;
            .w(75);
            
        }
        >div{
            display:flex;
            flex-direction:column;
            align-items:center;
            .h(110);
            span{
                .m_t(10);
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
      
       
    
    }
 } 
</style>