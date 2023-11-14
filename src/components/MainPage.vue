<template>

  <div class="mainPage">
    <div
      class="productsCatalog margin-bottom">Магазин мебели на Кутузовском
    </div>

    <div class="margin-bottom productsCatalog">
      <div class="margin-bottom size32" style="display:inline-block;">
        Каталог продукции
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

    <a class="pointer" @click="goToHomePage">На главную страницу</a>
  </div>

</template>


<script lang="ts">
import type { TProduct } from '../utilities/type'

import { computed, defineComponent, ref} from 'vue'
import { useRouter } from 'vue-router'
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

    const router = useRouter()
    const store =  useStore()           // К стору могу обращаться из setup так как он инициализируется раньше? Да стор инициализируется в самом начале.
    store.dispatch('fetchProducts')

    console.log('MainPage store', store.getters.allProducts)

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

    function goToHomePage() {
      router.push({ name: 'Home' })
    }

    return {
      title,
      products,
      addNewProductInCatalog,
      addProdUserBasket,
      showBasket,
      goToHomePage
    }    
  }
})

</script>

<style>
  .mainPage {
    border: 1px solid red;
    background-color: floralwhite;
  }

  .flex {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
 }
 
  .size32 {
    font-size: 32px;
    font-weight: bold;
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