<template>
  <div class="characteristic">
    <table>
      <thead>
        <tr>
          <th colspan="2">Характеристики стола</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Параметры стола №</td>
          <td>{{ product.id }}</td>
        </tr>
        <tr>
          <td>Название стола:</td>
          <td>{{ product.title }}</td>
        </tr>
        <tr>
          <td>Длина:</td>
          <td>1800 см</td>
        </tr>
        <tr>
          <td>Ширина:</td>
          <td>1200 см</td>
        </tr> 
        <tr>
          <td>Высота:</td>
          <td>700 см</td>
        </tr> 
        <tr>
          <td>Разборный:</td>
          <td>Да</td>
        </tr> 
        <tr>
          <td>Срок годности:</td>
          <td>10 лет</td>
        </tr>                                                              
      </tbody>
    </table>
    <br>
    <a class="pointer" @click="goToMainPage">На страницу каталога</a>
  </div>
</template>

<script lang="ts">

import type { TProduct } from '../utilities/type'

import { computed, defineComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Characteristic',
  setup() {
    // Если обновить страницу, то store.products будет пустой. Так как он заполняется только когда заходим на страницу MainCatalog и срабатывает метод store.dispatch('fetchProducts')
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    store.dispatch('fetchProducts')
        console.log('route', route)
    console.log('router', router)

    const product = computed<TProduct>(() => {
      const arr: TProduct[] = []
      for(let element of store.getters.allProducts) {
        if(element.id === route.params.id) {
          arr.push(element)
          break
        }
      }  
      return arr[0]
    })

    function goToMainPage() {
      router.push({ name: 'mainPage' })
    }

    return {
      product,
      goToMainPage
    }
  }

})

</script>

<style>

  .characteristic .size25 {
    background-color: floralwhite;
  }

  .characteristic table,
  td {
    border: 1px solid #333;
  }

  .characteristic thead,
  tfoot {
    background-color: #333;
    color: #fff;
  }

</style>