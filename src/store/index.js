import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curMenu:{
      path:'/',
      name:'影视',
      bgColor:'skyblue'
    }
  },
  mutations: {
    setcurMenu(state,data){
      state.curMenu = data
    }
  },
  actions: {
  },
  modules: {
  }
})
