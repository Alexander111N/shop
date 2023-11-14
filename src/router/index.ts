import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'
import MainPage from '../components/MainPage.vue'
import Contacts from '../components/Contacts.vue'
import Page404 from '../components/Page404.vue'
import Characteristic from '../components/Characteristics.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: MainPage   
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/characteristic/:id',
      name: 'Characteristic',
      component: Characteristic
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Page404',
      component: Page404
    }
  ]
})