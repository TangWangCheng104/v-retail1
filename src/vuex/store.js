import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex)

//vuex里面存放数据的地方
var state = {
	count : 1,
	smysqlMsg:[]
}

//vuex里面存放方法的地方
var mutations = {
	incCount : ( state,data ) => {
		state.count++;
		state.smysqlMsg.push( data.mysqlMsg )
		console.log( data.mysqlMsg )
	}
	
}

export default new Vuex.Store({
	
	state,
	mutations
	
})

