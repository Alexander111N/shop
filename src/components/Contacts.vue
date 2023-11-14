<template>
  <div class="contacts">
    <h1>Наши контакты</h1>
    <div>
      <p>Точка продаж в Наро-Фоминском районе:</p>
      <p>Московская область, Наро-Фоминский р-н, г. Верея, пл. Советская, д. 15</p>
      <p>Контактный телефон: +7 (985) 769 87 77</p>
    </div>
    <br>
    <img src="https://wpuroki.ru/wp-content/uploads/2015/06/Jandeks-karta-dlja-sajta-s-pomoshhju-koda.jpg">
    <br>
    <br>
    <div>
      <p>
        <b>График работы:</b>
      </p>
      <p>Понедельник - Суббота: 08:00-19:00</p>
      <p>Воскресенье: 08:00-18:00</p>
      <!-- <br> -->
      <p>
        <b>Ждем вас в гости!</b>
      </p>
    </div>
    <br>
    <a class="pointer" @click="goToHomePage">На главную страницу</a>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Contacts',
  setup() {

    const router = useRouter()

    function goToHomePage() {
      router.push({ name: 'Home' })
    }

    return {
      goToHomePage
    }
  }
})

</script>

<style>

  .contacts {
    background-color: antiquewhite;
    text-align: center;
  }

  .pointer {
    color: blue;
    cursor: pointer;
  }

</style>