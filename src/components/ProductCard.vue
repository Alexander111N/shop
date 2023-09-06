<template>
  <div class="productCard border">
    <img 
    :src="imgUrl"
    class="size1">
    <img>
    <div>
      <h2> {{ title }} </h2>
      <p> Цена {{ price }}р. </p>
      <p>Доступно для доставки: {{ count }}шт.</p>
      <button
        @click="addToBusket">
        Добавить в корзину</button>         
    </div>

  </div> 
</template>

<script lang="ts">

import { defineComponent} from 'vue'

export default defineComponent({
  name: 'ProductCard',
  props:{
    title: {
      type: String
    },
    price: {
      type: Number
    },
    count: {
      type: Number
    },
    imgUrl: {
      type: String
    }
  }

})
</script>

<style>

  .productCard {
    width: 250px;
    margin: 20px 100px 20px 100px;
  }

  .size1 {
    width: 100px;
    height: 100px;
  }
  
  .border {
    border: solid grey 1px;
  }

</style>