import Vue from 'vue'
export default{
	changCar(state,params){
		console.log('触发mutations')
		
		Vue.set(state,'cars',params)
     // state.cars=params
	}
}