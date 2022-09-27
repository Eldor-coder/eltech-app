<template>
    <the-router :routerProps="{pageName1 : 'Каталог', pageName2 : pageName, pageName3 : ''}"></the-router>
    <div class="subcatproductlist">
        <!-- <div class="subcatproductlist__filtr col-3">
            <h3>form</h3>
        </div> -->
        <div class="container">
            <div class="row subcatproductlist__box col-12">
                <div class="col-3 product__item" v-for="product of allproducts" :key="product._id">
                    <product-item :product="product" />
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import ProductItem from './ProductItem.vue'
    import TheRouter from '@/components/TheRouter'

    export default {
        data() {
            return {
                subcatID : null,
                subCategories : [],
                products : [
                    {
                        subcategory : {
                            title : ''
                        }
                    }
                ],
                routerProps : {
                    pageName1 : 'Каталог',
                    pageName2 : '',
                    path : 'news'
                }
            }
        },
        methods: {
            // normalNumber(num){
            //     let num = new Number(num)
            //     return num.toLocalString('ru-RU')
            // }
            getSubCatProducts(){
                this.$store.dispatch('getSubCatProducts', this.subcatID)
            }
        },
        watch : {
        $route(to){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
           this.$store.dispatch('getSubCatProducts', to.params.subcatID)
        }
    },
        components: {
            ProductItem,
            TheRouter
        },
        computed: {
            allproducts() { 
                return this.$store.getters.getsubcatproducts
            },
            pageName(){
                return this.$store.getters.getPageName
            }
        },
        created(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            this.subcatID = this.$route.params.subcatID
            this.$store.dispatch('getSubCatProducts', this.subcatID)
            this.products = this.$store.getters.getsubcatproducts
            this.$store.dispatch('setMore')
        }
    }
</script>

<style lang="scss">
    .subcatproductlist {
        display: flex;
        .container {
            z-index: 0;
            padding: 0;
        }
    }
    .product__item {
        margin-bottom: 20px;
    }
</style>
