<template>

  <div class="mainPage">
    <div
      class="productsCatalog margin-bottom">Этот компонент называется {{ title }}
    </div>

    <div class="margin-bottom productsCatalog">
      <div class="margin-bottom" style="display:inline-block;">
        Каталог продукции!!!
      </div>
      <div
        class="flex">
        <span
          v-for="(product, index) in products"
          :key="index">
          <ProductCard
          :id="product.id"
          :title="product.title"
          :price="product.price"
          :count="product.count"
          :imgUrl="product.imgUrl"
          @add-To-Busket="addProdUserBasket(product)"/>
        </span>
      </div>
    </div>

    <button
      class="button"
      @click="addNewProductInCatalog">Добавить новый товар в Каталог
    </button>

    <button
      class="button"
      @click="check">check store
    </button>
      
    <UserBusket
      v-if="showBasket"/>

  </div>

</template>


<script lang="ts">
import type { TProduct } from '../utilities/type'

import { computed, defineComponent, ref} from 'vue'
import { useStore } from 'vuex'

import ProductCard from './ProductCard.vue'
import UserBusket from './UserBasket.vue'

export default defineComponent({
  name: 'MainPage',
  components: {
    ProductCard,
    UserBusket
  },

  setup(props, ctx) {

    const store =  useStore()           // К стору могу обращаться из setup так как он инициализируется раньше? Да стор инициализируется в самом начале.
    store.dispatch('fetchProducts')

    const title = ref<string>('MainPage')

    const products = computed<TProduct[]>(() => {
      return store.getters.allProducts        // реактивная переменная state.products внутри allProducts, как computed понимает что она должна поменяться? А если бы у нас внутри allProducts была реактивная переменная и еще один метод где тоже была бы реактивная переменная. Как computed понимает за кем смотреть?
    })                                              // Почему присваивается Proxy(Array) {0: {…}, 1: {…}, 2: {…}, 3: {…}, 4: {…}} ? Потому что Vue 3 построен на Прокси
    //console.log('products', products)

    function addNewProductInCatalog() {
      store.dispatch('changeProducts')
      console.log(store.getters.allProducts)
      console.table('123', store.getters.allProducts)
    }

    function addProdUserBasket(product: TProduct) {
      store.dispatch('addProdUserBasket', {...product}) 
      //store.dispatch('addProdUserBasket', {...product, count: 1})   
    }

    const showBasket = computed<boolean>(() => {
      return store.getters.getUserProducts.length > 0
    })


    return {
      title,
      products,
      addNewProductInCatalog,
      addProdUserBasket,
      showBasket,
    }    
  }
})

</script>

<style>
  .mainPage {
    border: 1px solid red;
  }

  .flex {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
 }

 .margin-bottom {
  margin-bottom: 30px;
 }

 .productsCatalog {
   text-align: center;
 }

 .button {
  margin: auto;
  display: block;
 }

</style>







    function check() {
      if(products.value === store.state.products) {
         console.log('Массив ссылается на один и тот же объект' )
      }
      if(products.value[0] === store.state.products[0]) {
         console.log('Элемент ссылается на один и тот же объект' )
      }
      if(products.value[0].count === store.state.products[0].count) {
         console.log('значения равны' )
      }      
      console.log('products на странице до изменений', products.value[0] )
      console.log('products в state до изменений', store.state.products[0] )

      products.value[0].count = 888

     console.log('products на странице после изменений', products.value[0] )
      console.log('products в state', store.state.products[0] )

    }