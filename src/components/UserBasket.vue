<template>
  <div class="offsets borderUserBasket">
    <div style="font-weight: bold;" class="center">Корзина покупателя</div>
    <!-- <img src="{{ imgUrl }}"> -->

      <ol>
        <li
          class="bottom"
          v-for="(product, index) in userProducts"
          :key="index">
          <span class="mr-right">{{ product.title + ' - цена: ' + product.price + ' руб. - ' + product.count + ' шт.'}}</span>
          <button class="mr-right">Оформить</button>
          <button
            @click="deleteProdUserBusket(product)">Удалить
          </button>
        </li>
      </ol>
  </div>

</template>

<script lang="ts">
import type { TProduct } from '../utilities/type'

import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'UserBasket',
  props:{
    imgUrl: {
      type: String
    }
  },
  setup() {
    const store = useStore()
    const userProducts = computed<TProduct[]>(() => {
      return store.getters.getUserProducts
    })

    function deleteProdUserBusket(product: any) {
      store.dispatch('deleteProdUserBasket', {...product, price: product.price/product.count})
    }

    return {
      userProducts,
      deleteProdUserBusket
    }

  }

})
</script>

<style>

  .bottom {
    margin-bottom: 15px;
  }
  
  .borderUserBasket {
    border: 1rem solid;
  }

  .center {
    text-align: center;
  }

  .offsets {
  width: 600px;
  margin-top: 30px;
  margin-bottom: 30px;
 }

 .mr-right {
  margin-right: 20px;
 }

</style>