<template>
  <div class="container">
    <the-router :routerProps="{pageName1 : 'Избранное', pageName2 : '', pageName3 : ''}"></the-router>
    <h1 class="favs__title">
        Избранное
    </h1>
    <div class="favs">
        <div class="col-3">
            <div class="favs__signup">
                <h2 class="favs__signup--title">
                    Войдите или зарегистрируйтесь
                </h2>
                <button class="favs__signup--btn">
                    Войти
                </button>
            </div>
        </div>
        <div class="col-9">
            <div class="favs__box">
                <!-- <div class="row">
                    <div class="col-3 product__item" v-for="(product) of products.products.slice(0,4)" :key="product._id">
                        <product-item 
                            :product="product" :title="products.title" 
                        />
                    </div>
                </div> -->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TheRouter from '@/components/TheRouter'
// import ProductItem from '@/components/ProductItem'

export default {
    components : {
        TheRouter,
        // ProductItem
    },
    computed : {
        // this.$store.getters.
    },
    created(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if(this.$cookies.isKey('elteshfavs')) {
            let favs = JSON.parse(this.$cookies.get('elteshfavs'))
            this.$store.dispatch('getFavAds', favs)
        }
        this.$store.dispatch('setMore')
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/var';

    .favs{
        color: $black;
        &__title {
            font-weight: 700;
            font-size: 36px;
            line-height: 130%;
            margin-bottom: 30px;
        }
        &__signup {
            padding: 30px;
            border: 1px solid #EAEAF0;
            border-radius: 8px;
            &--title {
                font-weight: 700;
                font-size: 16px;
                line-height: 130%;
                margin-bottom: 20px;
            }
            &--btn {
                background: #2A5275;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 15px 20px;
                font-weight: 500;
                font-size: 16px;
                color: #fff;
                line-height: 100%;
            }
        }
    }

</style>