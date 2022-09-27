<template>
  <div class="container">
    <the-router :routerProps="{pageName1 : 'Акции', pageName2 : getStock[stockIDX].title, pageName3 : ''}"></the-router>
    <div class="stock">
        <h1 class="stock__title">
            {{getStock[stockIDX].title}}
        </h1>
       <div class="stock__box">
         <div class="stock__left col-7">
            <p class="stock__subtitle">
                {{getStock[stockIDX].subtitle}}
            </p>
            <h2 class="stock__btitle">
                {{getStock[stockIDX].btitle}}
            </h2>
            <ul>
                <li class="stock__list" v-for="(txt,idx) of texts" :key="idx">
                    {{txt}}
                </li>
            </ul>
        </div>
        <div class="stock__right col-5">
            <!-- <div class="stock__right--img"
                :style="{ backgroundImage: 'url(' + require(`../assets/images/${img}`) + ')' }"
            >
            </div> -->
            <img class="stock__img" :src="require(`../assets/images/${img}`)" alt="">
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
    data() {
        return {
            stockIDX : null,
            texts : [],
            img : ''
        }
    },
    computed : {
        getStock(){
            return this.$store.getters.getStocks
        },
    },
    created(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        this.stockIDX = this.$route.params.stockID
        this.texts = this.getStock[this.stockIDX].text
        this.img = this.getStock[this.stockIDX].imgURL
        this.$store.dispatch('setMore')
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/Components/StockComponentStyle';
</style>