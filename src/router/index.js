import Vue from 'vue'
import VueRouter from 'vue-router'
import Tv from '../views/Tv'
import Book from '../views/Book'
import News from '../views/News'
import Music from '../views/Music'
import TvDetails from '../views/TvDetalis.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tv',
    component: Tv
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/news',
    name: 'News',
    component: News
  }, {
    path: '/tvdetails/:id',
    name: 'TvDetails',
    component: TvDetails
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
