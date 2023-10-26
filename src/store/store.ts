import type { TProduct } from '../utilities/type'

import { createStore } from 'vuex'

import getProducts from '../utilities/mock'

export const store = createStore({
  // state() {
  //   return {
  //     count: 123
  //   }
  // },
  state: {
    products: <TProduct[]>[],                          // типизацию можем указать только через интерфейс применив его к переменной store ?
    userProducts: <TProduct[]>[],
    count: 123                                       // использую для примера в template
  },
  getters: {
    allProducts(state):TProduct[] {
      return JSON.parse(JSON.stringify(state.products))
    },
    getUserProducts(state) {
      return JSON.parse(JSON.stringify(state.userProducts))
    }
  },
  actions: {
    fetchProducts(ctx) {     
      const res = getProducts()
      ctx.commit('updateProducts', res)
    },
    changeProducts(ctx) {
      ctx.commit('addProd',     {
        title: 'Стол Навороченный2222',
        imgUrl: 'https://static.tildacdn.com/tild3164-6632-4539-b530-376336623631/65476E3D-CB05-414A-8.jpeg',
        price: 3500,
        count: 8
      } )
    },
    addProdUserBasket(ctx, data) {
      ctx.commit('updateCountOnCardDelete', data )
      ctx.commit('updateUserBasketAdd', data )
    },
    deleteProdUserBasket(ctx, data) {
      ctx.commit('updateUserBasketDelete', data)
      ctx.commit('updateCountOnCardAdd', data)
    }


  },
  mutations: {
    updateProducts(state, res:TProduct[]) {
      state.products = res
    },

    addProd(state, newInfo) {
      state.products.push(newInfo)
    },

    updateCountOnCardDelete(state, data) {
      state.products.forEach(item => {  // Уменьшаем количество на 1 от общего количества на складе
        if(item.id === data.id) {
          if(item.count === 0) {
            alert('Товара на складе больше нет!!!')
            return       
          } else {
            item.count--
          }
        }
      })   
    },

    updateCountOnCardAdd(state, data) {
      state.products.forEach(item => {  // Увеличиавем количество на 1 на складе
        if(item.id === data.id) {
          item.count++
        }
      })         
    },   

    updateUserBasketAdd(state, data) {
      if(data.count === 0) {
        console.log('data.count', data.count)
        return
      }
      console.log('data.count', data.count)

      let isProdExist = false

      state.userProducts.forEach(item => {
        if(item.id === data.id) {
          item.price += data.price
          item.count ++
          isProdExist = true      
          return      
        }
      })

      if(!isProdExist) {
        state.userProducts.push({...data, count:1}) // При первом добавлении объекта в корзину делаем ему количество 1. В противном случае количество берется с карточки
      }
    },

    updateUserBasketDelete(state, data) {
      state.userProducts.forEach((item, index) => {  // Уменьшаем количество на 1 в корзине от общего количества
        if(item.id === data.id) {
          item.count--
          item.price -= data.price
          if(item.count === 0) {
            state.userProducts.splice(index, 1)   // Убираем запись из корзины       
          }      
          return      
        }
      })
    }
  }

})