<template>
  <div class="container">
    <the-router :routerProps="{pageName1 : 'Каталог', pageName2 : pageName, pageName3 : product.title}"></the-router>
    <div class="product">
        <div class="product__top">
            <div class="left col-5">
                <Splide :options="{
                    perPage : 1,
                    perMove : 1,
                    autoplay : true,
                    rewind : true,
                    wheel : true,
                    live : true,
                    interval : 5000
                    
                }" class="product--slider">
                    <SplideSlide v-for="(item,index) of product.photos" :key="index" 
                        class="product--slide">
                        <img class="product__img" :src="`${uri}/${item}`" alt="img">
                    </SplideSlide>
                </Splide>
            </div>
            <div class="right col-7">
                <h2 class="product__title">
                    {{product.title}}
                </h2>
                <div class="product__main--box">
                    <div class="product__main--top">
                        <div class="product__main--top--left">
                            <div class="product__rate">
                                <img src="../assets/images/star.svg" alt="star" class="product__star">
                                <img src="../assets/images/star.svg" alt="star" class="product__star">
                                <img src="../assets/images/star.svg" alt="star" class="product__star">
                                <img src="../assets/images/star.svg" alt="star" class="product__star">
                                <img src="../assets/images/star(white).svg" alt="star" class="product__star">
                            </div>
                            <img class="product__commentsimg" src="../assets/images/comments.png" alt="">
                            <span class="product__commentscount">
                                ({{num}})
                            </span>
                        </div>
                        <div class="product__main--top--btns">
                            <button :class="{'product__like': true}" @click="adsFav(product._id)">
                                <!-- <img :class="{'product__like--svg' : true, liked: addToLikes}" src="../assets/images/heart.svg" alt=""> -->
                                <svg :class="{'product__like--svg' : true, 'fav' : product.fav}" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.16 2.00004C18.1 0.937251 16.6948 0.288583 15.1984 0.171213C13.7019 0.0538432 12.2128 0.475509 11 1.36004C9.72769 0.413681 8.14402 -0.0154454 6.56795 0.159081C4.99188 0.333607 3.54047 1.09882 2.506 2.30063C1.47154 3.50244 0.930854 5.05156 0.992833 6.63606C1.05481 8.22055 1.71485 9.72271 2.84003 10.84L9.05003 17.06C9.57005 17.5718 10.2704 17.8587 11 17.8587C11.7296 17.8587 12.43 17.5718 12.95 17.06L19.16 10.84C20.3276 9.66531 20.983 8.07632 20.983 6.42004C20.983 4.76377 20.3276 3.17478 19.16 2.00004ZM17.75 9.46004L11.54 15.67C11.4694 15.7414 11.3853 15.798 11.2926 15.8367C11.1999 15.8753 11.1005 15.8953 11 15.8953C10.8996 15.8953 10.8002 15.8753 10.7075 15.8367C10.6148 15.798 10.5307 15.7414 10.46 15.67L4.25003 9.43004C3.46579 8.62839 3.02664 7.55151 3.02664 6.43004C3.02664 5.30858 3.46579 4.2317 4.25003 3.43004C5.04919 2.64103 6.127 2.19861 7.25003 2.19861C8.37306 2.19861 9.45088 2.64103 10.25 3.43004C10.343 3.52377 10.4536 3.59817 10.5755 3.64893C10.6973 3.6997 10.828 3.72584 10.96 3.72584C11.092 3.72584 11.2227 3.6997 11.3446 3.64893C11.4665 3.59817 11.5771 3.52377 11.67 3.43004C12.4692 2.64103 13.547 2.19861 14.67 2.19861C15.7931 2.19861 16.8709 2.64103 17.67 3.43004C18.4651 4.22119 18.9186 5.29223 18.9336 6.41373C18.9485 7.53522 18.5237 8.61798 17.75 9.43004V9.46004Z" fill="#838688"/>
                                </svg>
                            </button>
                            <button class="product__main--top--btn">
                                <img class="product__main--top--btnImg" src="../assets/images/compair.svg" alt="compair">
                            </button>
                        </div>
                    </div>
                    <div class="product__main--bottom">
                        <h3 class="product__price">
                            {{product.price}} сум
                        </h3>
                        <div class="product__main--bottom--btns">
                            <button class="product__main--bottom--btn bin">
                                В корзину
                            </button>
                            <router-link to="/order" class="product__main--bottom--btn buy">
                                Купить в 1 клик
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="product__info--box">
                    <div class="product__info--box--left">
                        <img src="../assets/images/shipping.png" alt="" class="product__info--box--img">
                        <div class="product__info--box--text">
                            <h4 class="product__info--box--title">
                                Доставка
                            </h4>
                            <p class="product__info--box--subtitle">
                                Доставим по Ташкенту в течение 2 часов и бесплатно. Стоимость доставки в другие города уточняйте у менеджера.
                            </p>
                        </div>
                    </div>
                    <div class="product__info--box--right">
                        <img src="../assets/images/payment.png" alt="" class="product__info--box--img">
                        <div class="product__info--box--text">
                            <h4 class="product__info--box--title">
                                Оплата
                            </h4>
                            <p class="product__info--box--subtitle">
                                Принимаем к оплате как наличный, так и безналичный расчёт. Возможна оплата электронными кошельками.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product__information">
            <div class="product__router">
                <button @click="change('ProductDescription')" :class="['product__router--btn', { active: name === 'ProductDescription' }]">
                    Описание
                </button>
                <button @click="change('ProductCharacteristics')" :class="['product__router--btn', { active: name === 'ProductCharacteristics' }]">
                    Характеристики
                </button>
                <button @click="change('ProductComments')" :class="['product__router--btn', { active: name === 'ProductComments' }]">
                    Отзывы ({{num}})
                </button>
            </div>
            <component :is='name' class="component "></component>
        </div>
    </div>
    <div class="product__slider--others">
        <h3 class="product__slider--others--title">
            Похожие объявления
        </h3>
        <Splide :options="{ 
            perPage : 4,
            type : 'loop',
            perMove : 1,
            autoPlay : true,
            rewind : true,
            wheel : true,
            live : true,
            interval : 4000
        }"
            class="product__others"
        >
            <SplideSlide 
                v-for="product of others" 
                :key="product._id"
                class="product__splide"
            >
                <product-item :product="product" :title="product.subcategory.title"/>
            </SplideSlide>
        </Splide>
    </div>
  </div>
</template>

<script>
// :style="{  backgroundImage : 'url(' + require(`${uri}/${item}`) + ')'}" 
import ProductDescription from '@/components/ChildrenComponents/ProductDescription'
import ProductCharacteristics from '@/components/ChildrenComponents/ProductCharacteristics'
import ProductComments from '@/components/ChildrenComponents/ProductComments'
import TheRouter from '@/components/TheRouter'
import ProductItem from '@/components/ProductItem'

export default {
    data() {
        return {
            name : 'ProductDescription',
            num : null,
            routerProps : {
                    pageName1 : 'Каталог',
                    pageName2 : '',
                    pageName3 : '',
                    path : 'news'
                }
        }
    },
    components : {
        ProductDescription,
        ProductCharacteristics,
        ProductComments,
        TheRouter,
        ProductItem
    },
    methods: {
         adsFav(id){
            if(this.$cookies.isKey('elteshfavs')) {
                let favs = JSON.parse(this.$cookies.get('elteshfavs'))
                let favsIndex = favs.findIndex(fav => fav == id)
                if(favsIndex == -1) {
                    favs.push(id)
                    this.product.fav = true
                    this.$store.dispatch('setMsg', {
                        text : 'Добавлено в избранные!',
                        class : 'success'
                    })
                } else {
                    favs.splice(favsIndex, 1)
                    this.product.fav = false
                    this.$store.dispatch('setMsg', {
                        text : 'Удалено из избранных!',
                        class : 'warning'
                    })
                }
                this.$cookies.set('elteshfavs', JSON.stringify(favs))
            } else {
                this.$cookies.set('elteshfavs', JSON.stringify([id]))
                this.$store.dispatch('setMsg', {
                    text : 'Добавлено в избранные!',
                    class : 'success'
                })
            }
        },
        change(param) {
            this.name = param
        }
    },
    watch : {
        $route(to){
           this.$store.dispatch('getAds', to.params.productID)
           window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    computed:{
        product(){
            return this.$store.getters.getOneProduct
        },
        uri(){
            return this.$store.getters.getUri
        },
        pageName(){
            return this.$store.getters.getPageName
        },
        others(){
            return this.$store.getters.getOthers
        }
    },
    created(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        const productID = this.$route.params.productID
        this.$store.dispatch('getAds',productID)
        this.num = Math.floor(Math.random() * 11);
        this.$store.dispatch('getUserInfo', this.num)
        this.$store.dispatch('getComments')
        this.$store.dispatch('clear')
        this.$store.dispatch('setClose', false)
        this.$store.dispatch('setMore')
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/Components/OneProduct';
    
    
</style>