import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import shopcar from './shopcar'
const store = new Vuex.Store({
   modules:{
   	shopcar:shopcar
   }
})

export default  store