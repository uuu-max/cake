export default{
	all(state){
		let num=0;
		let price=0;
		console.log('------');
		console.log(state)
        for (var i = 0; i <state.cars.length; i++) {

			if(state.cars[i].check){
				num+=state.cars[i].num
        	
				price+=Number(state.cars[i].num)*Number(state.cars[i].price)
			}

        	
		}
	
        return price;
	}
}