<template>
  <header-top class="header1">
    <div class="glass">
    </div>
  </header-top>
  <the-header class="header">
    <div class="glass">
    </div>
  </the-header>
  <app-loader v-show="toggleLoading"></app-loader>
  <category-list></category-list>
  <router-view></router-view>
  <msg-item></msg-item>
  <the-footer></the-footer>
  <div class="recaptcha" id="recaptcha-container"></div>
</template>

<script>
import HeaderTop from '@/components/ChildrenComponents/HeaderTop'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import CategoryList from '@/components/CategoryList'
import AppLoader from '@/components/AppLoader'
import MsgItem from '@/components/MsgItem'

export default {
  data() {
    return {
      
    }
  },
  components : {
    TheHeader,
    TheFooter,
    CategoryList,
    AppLoader,
    MsgItem,
    HeaderTop
  },
  computed : {
    toggleLoading(){
      return this.$store.getters.getToggleLoading
    }
  },
  created(){
      // return this.$store.dispatch('getProducts')
      //  this.$store.dispatch('setLikedProductss')
      //  this.$store.dispatch('setLikedProducts')
        // if(this.$cookies.isKey('eltechusers')) { 

        // }
    }
}
</script>

<style lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .header {
    position: relative;
  }
  .header1 {
    position: relative;
  }
  .glass {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #2A5275;
    opacity: 0.6;
    z-index: unset;
  }
  .recaptcha {
    z-index: 6;
  }
</style>
