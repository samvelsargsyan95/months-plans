import Vue from 'vue'
import Vuex from 'vuex'
import { plans } from "./plans";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  modules: {
    plans
  }
});

export default store;

