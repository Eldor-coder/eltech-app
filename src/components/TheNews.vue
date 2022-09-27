<template>
    <div class="container">
        <div class="news">
            <div class="news__top">
                <h3 class="news__title">
                    Новости
                </h3>  
                <div class="news__router">
                    <router-link to="/news" class="news__link">
                        Читать все
                    </router-link>
                    <img src="../assets/images/triangle.svg" alt="">
                </div>
            </div>
            <div class="news__bottom">
                <div class="row">
                    <div class="col-6" v-for="(news,index) of getNews" :key="news.id">
                        <div class="news__box">
                            <router-link :to="'/news/' + index" class="news__btitle">
                                {{news.title.slice(0,30)}}
                            </router-link>
                            <div class="news__subtitle--box">
                                <p class="news__subtitle">
                                    {{news.description.slice(0,150)}}
                                </p>
                            </div>
                            <div class="news__box--bottom">
                                <div>
                                    <router-link :to="'/news/' + index" class="news__box--router">
                                        Подробнее
                                    </router-link>
                                    <img src="../assets/images/triangle.svg" alt="">
                                </div>
                                <div>
                                    <p class="news__time">
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
</template>

<script>
export default {
    computed : {
        getNews(){
            return this.$store.getters.getNews.slice(0,2)
        }
    },
    methods: {
        getNormalDate(date) {
            let dd = new Date(date)
            return `${dd.getDay()}-${dd.getMonth()+1}-${dd.getFullYear()} ${dd.getHours()}:${dd.getSeconds()}`
        }
    },
    created(){
        this.$store.dispatch('getNews')
    }
}
</script>

<style lang="sass" scoped>
    @import '../styles/Components/TheNews'
</style>