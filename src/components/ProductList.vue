<template>
    <div class="container">
        <div class="products__box" v-for="products of allproducts" :key="products._id">
            <div class="products__title--box">
                <h2>
                    {{products.title}}
                </h2>
                <div class="products__link">
                    <router-link :to="'/subcategory/' + products._id" class="product__seeallproducts">
                    Все товары
                    </router-link>
                    <img src="../assets/images/triangle.svg" alt="triangle">
                </div>
            </div>
            <div class="row" v-if="products.products.length > 0">
                <div class="product__item " v-for="(product) of products.products.slice(0,4)" :key="product._id">
                    <product-item 
                        :product="product" :title="products.title" 
                    />
                </div>
            </div>
            <div v-else class="products__noproducts">
                <h3 class="products__noproducts--title">
                    Товаров пока нет
                </h3>
            </div>
        </div>
    </div>
</template>
// v-if="index == 0 || index == 1 || index == 2 || index == 3 " 
<script>
    import ProductItem from './ProductItem.vue'

    export default {
        components: {
            ProductItem
        },
        computed: {
            allproducts() {
                return this.$store.getters.getProducts
            }
        }
    }
</script>

<style lang="scss">

</style>