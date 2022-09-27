<template>
  <div class="container">
    <the-router :routerProps="{pageName1 : 'Акции', pageName2 : '', pageName3 : ''}"></the-router>
    <div class="stocks">
        <h1 class="stocks__title">
            Акции
        </h1>
        <div class="stocks__body row">
            <div class="stocks__box col-6" v-for="(stock,idx) of stocks" :key="idx">
                <div>
                    <router-link :to="'/stocks/' + idx" class="stocks__text">
                        {{stock.title}}
                    </router-link>
                </div>
                <div>
                    <img class="stocks__img" :src="require(`../assets/images/${stock.imgURL}`)" alt="">
                </div>
            </div>
        </div>
    </div>
 
  </div>
</template>

<script>
import TheRouter from '@/components/TheRouter'

export default {
    components : {
        TheRouter
    },
    computed : {
        stocks(){
            return this.$store.getters.getStocks
        }
    },
    created(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        this.$store.dispatch('setMore')
        this.$store.dispatch('setToggleLoading', false)
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/Components/TheStocks'
</style>