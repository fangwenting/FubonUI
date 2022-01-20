import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginSuccess: false, // 判斷登入是否成功
  },
  mutations: {
    showLoginSuccess(state, data){
      state.loginSuccess = data.loginSuccess;
    }
  },
  actions: {
    saveLoginSuccess({ commit }, loginSuccess) {
      commit({type: 'showLoginSuccess',loginSuccess})
    }
  },
  getters: {
    getLoginSuccess (state) {
      return state.loginSuccess;
    }
  },
  modules: {
  }
})
