<template>
    <the-router :routerProps="{pageName1 : 'Каталог', pageName2 : pageName, pageName3 : ''}"></the-router>
    <div class="subcatproductlist">
       
        <div class="container">
            <h3 class="subcatproductlist__title">
                Товары под брендом {{allproducts.title}}
            </h3>
            <div class="row subcatproductlist__box col-12">
                <div class="col-3 product__item" v-for="product of allproducts.products" :key="product._id">
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
                this.$store.dispatch('setBrandProducts', this.brandID)
            }
        },
        watch : {
        $route(to){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
           this.$store.dispatch('setBrandProducts', to.params.brandID)
        }
    },
        components: {
            ProductItem,
            TheRouter
        },
        computed: {
            allproducts() { 
                return this.$store.getters.getBrandProducts
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
            this.brandID = this.$route.params.brandID
            this.$store.dispatch('setBrandProducts', this.brandID)
            this.products = this.$store.getters.getBrandProducts
            this.$store.dispatch('setMore')
        }
    }
</script>

<style lang="scss">
    @import '../styles/var';

    .subcatproductlist {
        display: flex;
        
        .container {
            z-index: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
        }
        &__title {
            font-weight: 700;
            font-size: 36px;
            line-height: 130%;
            color: $black;
            margin-bottom: 30px;
        }
    }
    .product__item {
        margin-bottom: 20px;
    }
</style>
