<template>
  <div>Ваш заказ сформирован. Для оплаты нажмите "Оплатить"

  </div>
</template>


<script lang="ts">
import type { TProduct } from '../utilities/type'

import { Tables } from '../utilities/enum'

import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Order',
  setup() {
    const store = useStore()

    const finallOrder = computed(() => {
      return calculateFinallOrder(store.getters.getUserProducts)
    })

    function calculateFinallOrder(data: TProduct[]) {
      const abc: TProduct[] = []
      const homeTable = {
        name: 'Стол Домашний',
        price: 0,
        count: 0
      }
    }
    
  }
})
</script>

<style>

</style>