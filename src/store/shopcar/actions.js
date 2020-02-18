export default{
    initCars({commit}){
        let cars=localStorage.cars?JSON.parse(localStorage.cars):[]
        commit('changCar',cars)
    },
	addCar({commit},params){
        console.log('添加购物车');
        console.log(params);
		
	
          //模拟成功
          let cars=localStorage.cars?JSON.parse(localStorage.cars):[]
          //如果存在 num+1 如果不存在 push
          //array.some 函数 遍历数组 如果内部返回ture 整个表达式就是ture 不返回就是假
          let index=0;
          console.log(cars);
          let  isHas=cars.some((item)=>{
          	   index++
          	 if(item.id===params.id && item.dec==item.dec){
          	 	console.log(item);
          	 	return true
          	 }
          })
          console.log(index);
          if (isHas) {
          	// 已经存在  num++
             cars[index-1].num+=1
             console.log(cars);
          }else{
          	//不存在
          	params.num=1
          	cars.push(params)
          }      
          //本地缓存模拟的数据进行更新
          localStorage.cars=JSON.stringify(cars)
          //vuex 进行更新
          commit('changCar',cars)
		
    },
    addItem({commit},params){
        console.log('添加一件');
        let cars=JSON.parse(localStorage.cars)
        let arr = cars.filter(function (item) {
            return item.id === params.id;
        });
        console.log(arr);
        if(arr[0].num<arr[0].pnum){
            arr[0].num +=1;
        }
        
        console.log(cars);
         //本地缓存模拟的数据进行更新
         localStorage.cars=JSON.stringify(cars)
         //vuex 进行更新
         commit('changCar',cars)
    },
    remItem({commit},params){
        console.log('减少一件');
        let cars=JSON.parse(localStorage.cars)
        let arr = cars.filter(function (item) {
            return item.id === params.id;
        });
        console.log(arr);
        if(arr[0].num>0){
            arr[0].num -=1;
        }
        if(arr[0].num==0){
            console.log("sss")
            cars = cars.filter(function (item) {
                return item.id !== arr[0].id;
            });
        }
        
         //本地缓存模拟的数据进行更新
         localStorage.cars=JSON.stringify(cars)
         //vuex 进行更新
         commit('changCar',cars)
    },
    selectItem({commit},params){
        let cars=JSON.parse(localStorage.cars)
            console.log(params)
            cars.map(function (item) {
                if (item.id === params.id) {
                    item.check = !params.check;
                }
            })
        
        localStorage.cars = JSON.stringify(cars);
        commit('changCar',cars)
    },
    allItem({commit},params){
        console.log(params)
        let cars=JSON.parse(localStorage.cars)
        cars.map(function (item) {
            item.check = !params;
        })
        localStorage.cars = JSON.stringify(cars);
        commit('changCar',cars)
    },
    removeItem({commit},params){
        let cars=JSON.parse(localStorage.cars)
        let arr = cars.filter(function (item) {
            return item.check==false;
        });
        localStorage.cars = JSON.stringify(arr);
        commit('changCar',arr)
    }
}