<template>
  <div class="search">
    <div class="container">
        <div class="search__form ">
            <input 
                type="text" 
                class="search__input" 
                placeholder="Введите запрос, например «Smart balance»"
                v-model="title"
                @input="searcher()"
            >
            <!-- <button class="search__btn">
                <img src="@/assets/search.svg" alt="search">
            </button> -->
            <div class="search__result" v-show="results.length > 0">
                <router-link :to="`/product/${res._id}`" v-for="res of results" :key="res._id">
                    <!-- <span class="search__img" :style="{backgroundImage : require(`${uri}/${res.img}`)}" >  -->
                        
                        <!-- <img class="search__image" :src="require(`${uri}/${res.img}`)" alt=""> -->
                    <!-- </span> -->
                    {{res.title}}
                    <span class="search__price">
                        {{res.price == 0 ? 'договорная цена' : res.price}} 
                        <span v-show="res.price != 0">
                            {{res.currency == 1 ? '$' : 'сум'}}
                        </span>
                    </span>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title : ''
        }
    },
    computed :{
       results (){
           return this.$store.getters.getResults
       },
       uri(){
           return this.$store.getters.getUri
       }
    },
    methods: {
        searcher(){
            if(this.title.length > 0) {
                this.$store.dispatch('getResults',this.title)
            } else {
                this.$store.dispatch('clear')
            }
        }
    },
    watch : {
        $route(newValue) {
            if(newValue !== '/') {
                this.title = ''
            } 
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/Components/SearchBox';
</style>