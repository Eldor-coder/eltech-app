import { createStore } from 'vuex'
import headerMenuList from '@/store/headerMenuList'
import news from '@/store/news'
import images from '@/store/images'
import stocks from '@/store/stocks'
import allCategory from '@/store/allCategory'
import isActive from '@/store/isActive'
import products from '@/store/products'
import comments from '@/store/comments'
import search from '@/store/search'
import loading from '@/store/loading'
import message from '@/store/message'
import userStore from '@/store/user'
import regions from '@/store/regions'
import locations from '@/store/location'
import brends from '@/store/brends'
import vacansy from '@/store/vacansy'
import LikedProducts from '@/store/LikedProducts'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    headerMenuList,
    news,
    images,
    stocks,
    allCategory,
    isActive,
    products,
    comments,
    search,
    loading,
    message,
    userStore,
    regions,
    locations,
    brends,
    vacansy,
    LikedProducts
  }
})
