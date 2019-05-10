import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        count:0,
        user:{
          firstName:'张三',
          lastName:'找死'
        }
  },
  mutations: {
       inCount(state,n){
         state.count += n;
       },
       desCount(state,n){
         state.count -= n;
       },
       changeLastName(state,name){
         state.user.lastName = name
       }
  },
  actions: {
    // context 当前vuexd的上下文对象
      desCount(context,obj){
        setTimeout(() => {
            context.commit('desCount',obj.step  )
        }, 1000);
      }
  },
  getters:{
      fullName(state){
          return state.user.firstName+'.'+state.user.lastName;
      }
  }
})
