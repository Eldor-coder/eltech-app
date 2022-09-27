<template>
    <div class="allnews">
        <div class="container">
          <div class="allnews__top">
            <the-router :routerProps="{pageName1 : 'Новости', pageName2 : '', pageName3 : ''}"></the-router>
            <h2 class="allnews__title">
                Новости
            </h2>
        </div>
        <div class="allnews__bottom">
            <div class="row">
                <div class=" allnews__col col-6 " v-for="(news,index) of getNews" :key="news.id">
                    <div class="allnews__box">
                        <div class="allnews__left">
                            <div class="allnews__left--img"
                                v-if="news.urlToImage"
                                :style="{ backgroundImage: 'url(' + news.urlToImage + ')' }"
                            ></div>
                            <img v-else src="../assets/images/logo.svg" alt="">
                        </div>
                        <div class="allnews__right">
                            <div class="allnews__right--top">
                                <div class="allnews__btitle--box">
                                    <router-link :to="'/news/' + index" class="allnews__btitle">
                                        {{news.title}}
                                    </router-link>
                                </div>
                                <div class="allnews__subtitle--box">
                                    <p class="allnews__subtitle" v-if="news.description">
                                        {{news.description}}
                                    </p>
                                    <p class="allnews__subtitle" v-else>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eum a repudiandae enim voluptatem ratione.
                                    </p>
                                </div>
                            </div>
                            <div class="allnews__right--bottom">
                                <div>
                                    <router-link :to="'/news/' + index" class="allnews__box--router">
                                        Подробнее
                                    </router-link>
                                    <img class="allnews__triangle" src="../assets/images/triangle.svg" alt="">
                                </div>
                                <div>
                                    <p class="allnews__time">
                                        {{getNormalDate(news.publishedAt)}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <the-buttons></the-buttons>
  </div>
</template>

<script>
import TheButtons from '@/components/TheButtons'
import TheRouter from '@/components/TheRouter'

export default {
    data() {
        return {
            news : [],
            i : null,
            allNews : []
        }
    },
    components : {
        TheButtons,
        TheRouter
    },
    methods: {
        nextNews(n){
            let a = (n - 1) * 10
            let b = n * 10
            this.$store.dispatch('nextNews',{a,b})
            // this.$store.getters.getNews.slice(a * 10, n * 10)
        },
        getNormalDate(date) {
            let dd = new Date(date)
            return `${dd.getDay()}-${dd.getMonth()+1}-${dd.getFullYear()} ${dd.getHours()}:${dd.getSeconds()}`
        }
    },
    computed : { 
        getNews(){
            return this.$store.getters.getNews.slice(0,10)
        },
        newsCounter(){
            return this.$store.getters.getCounter / 10
        }
    },
    created() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        this.$store.dispatch('getNews')
        this.$store.dispatch('setMore')
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/Components/AllNews'
</style>