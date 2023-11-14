<template>
  <div class="home">

    <div class="title">
      <div>Магазин мебели</div>
      <div>на Кутузовском</div>
    </div>
    <div class="flex">
      <!-- <div>Каталог продукции</div>
      <div>Контакты</div> -->
      <a href="#" class="button8" @click="goToMainPage">Каталог продукции</a>
      <a href="#" class="button8" @click="goToContactsPage">Контакты</a>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup() {

    const router = useRouter()

    function goToContactsPage() {
      router.push({ name: 'Contacts' })
    }

    function goToMainPage() {
      router.push({ name: 'mainPage' })
    }    

    return {
      goToContactsPage,
      goToMainPage
    }
  }

})

</script>

<style>

  .home {
    background-color: antiquewhite;
  }


  .home .title {
    text-align: center;
    background-color: antiquewhite;
    font-size: 120px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
  }

  .home .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: auto;
    height: 400px;
        /* background-color: aquamarine; */
    align-items: center;
    font-size: 37px;
  }

  a.button8 {
  display: inline-block;
  color: #383737;
  font-weight: 700;
  text-decoration: none;
  user-select: none;
  padding: .5em 2em;
  outline: none;
  border: 2px solid;
  border-radius: 1px;
  transition: 0.2s;
} 
a.button8:hover { background: rgb(94 90 90 / 20%); }
a.button8:active { background: white; }

/* cursive */
</style>