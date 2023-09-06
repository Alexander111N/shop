<template>

  <div>
    <div
      class="mainPage">Эта страница называется {{ title }}
    </div>

    <div class="margin-bottom">
      <div class="margin-bottom">
        Каталог продукции!!!!!!!!!!!!!!!!!!! {{ $store.state.count}}
      </div>
      <div
        class="flex">
        <span
          v-for="(product, index) in products"
          :key="index">
          <ProductCard
          :title="product.title"
          :price="product.price"
          :count="product.count"
          :imgUrl="product.imgUrl"/>
        </span>
      </div>
    </div>

  </div>

</template>


<script lang="ts">
import type { IProducts } from '../utilities/type'

import { defineComponent, ref} from 'vue'
import { useStore } from 'vuex'

import ProductCard from './ProductCard.vue'

export default defineComponent({
  name: 'MainPage',
  components: {
    ProductCard
  },

  setup(props, ctx) {

    const store =  useStore()           // К стору могу обращаться из setup так как он инициализируется раньше?
    store.dispatch('fetchProducts')

    const title = ref<string>('MainPage')

    const products: IProducts = store.getters.allProducts   // Почему присваивается Proxy(Array) {0: {…}, 1: {…}, 2: {…}, 3: {…}, 4: {…}}, а не просто массив? Возвращается якобы объект, но методы массива
    //console.log('products', products)




    return {
      title,
      products
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

</style>