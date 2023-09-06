import type { IProducts } from '../utilities/type'

import { createStore } from 'vuex'

import getProducts from '../utilities/mock'

export const store = createStore({
  // state() {
  //   return {
  //     count: 123
  //   }
  // },
  state: {
    products: []                          // типизацию можем указать только через интерфейс применив его к переменной store ?
  },
  getters: {
    allProducts(state):IProducts {
      return state.products
    }
  },
  actions: {
    fetchProducts(ctx) {
      //console.log('ctx', ctx)
      
      const res = getProducts()
      ctx.commit('updateProducts', res)
    }
  },
  mutations: {
    updateProducts(state, res) {
      state.products = res
    }
  }

})