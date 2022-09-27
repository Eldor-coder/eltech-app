<template>
    <div class="product__box">
        <div class="product__top1">
            <router-link @click="toTop" :to="'/product/' + product._id" class="product__img" >
                <!-- :style="{backgroundImage: 'url('+uri+ '/' + product.img + ')'}" -->
                <img :src="`${uri}/${product.img}`" alt="img">
            </router-link>
           
            <router-link class="product__subcategory" :to="'/product/' + product._id">
                {{title}}
            </router-link>
            <router-link @click="toTop" class="product__title" :to="'/product/' + product._id">
                {{product.title}}
            </router-link>
        </div>
        <!-- <div class="product__center"> -->
            
            <!-- <div class="product__rate">
                <img src="../assets/images/star.svg" alt="star" class="product__star">
                <img src="../assets/images/star.svg" alt="star" class="product__star">
                <img src="../assets/images/star.svg" alt="star" class="product__star">
                <img src="../assets/images/star.svg" alt="star" class="product__star">
                <img src="../assets/images/star(white).svg" alt="star" class="product__star">
            </div> -->
        <!-- </div> -->
        <div class="product__bottom">
            <div class="product__bottom--top">
                <div class="product__bottom--top--left">
                    <span class="product__price">
                        {{product.price}} 
                    </span>
                    <span class="product__currency">сум</span>
                </div>
                <div class="product__bottom--top--right">
                    <button :class="{'product__like': true}" @click="adsFav(product._id)">
                        <!-- <img :class="{'product__like--svg' : true, liked: addToLikes}" src="../assets/images/heart.svg" alt=""> -->
                        <svg :class="{'product__like--svg' : true, 'fav' : product.fav}" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.16 2.00004C18.1 0.937251 16.6948 0.288583 15.1984 0.171213C13.7019 0.0538432 12.2128 0.475509 11 1.36004C9.72769 0.413681 8.14402 -0.0154454 6.56795 0.159081C4.99188 0.333607 3.54047 1.09882 2.506 2.30063C1.47154 3.50244 0.930854 5.05156 0.992833 6.63606C1.05481 8.22055 1.71485 9.72271 2.84003 10.84L9.05003 17.06C9.57005 17.5718 10.2704 17.8587 11 17.8587C11.7296 17.8587 12.43 17.5718 12.95 17.06L19.16 10.84C20.3276 9.66531 20.983 8.07632 20.983 6.42004C20.983 4.76377 20.3276 3.17478 19.16 2.00004ZM17.75 9.46004L11.54 15.67C11.4694 15.7414 11.3853 15.798 11.2926 15.8367C11.1999 15.8753 11.1005 15.8953 11 15.8953C10.8996 15.8953 10.8002 15.8753 10.7075 15.8367C10.6148 15.798 10.5307 15.7414 10.46 15.67L4.25003 9.43004C3.46579 8.62839 3.02664 7.55151 3.02664 6.43004C3.02664 5.30858 3.46579 4.2317 4.25003 3.43004C5.04919 2.64103 6.127 2.19861 7.25003 2.19861C8.37306 2.19861 9.45088 2.64103 10.25 3.43004C10.343 3.52377 10.4536 3.59817 10.5755 3.64893C10.6973 3.6997 10.828 3.72584 10.96 3.72584C11.092 3.72584 11.2227 3.6997 11.3446 3.64893C11.4665 3.59817 11.5771 3.52377 11.67 3.43004C12.4692 2.64103 13.547 2.19861 14.67 2.19861C15.7931 2.19861 16.8709 2.64103 17.67 3.43004C18.4651 4.22119 18.9186 5.29223 18.9336 6.41373C18.9485 7.53522 18.5237 8.61798 17.75 9.43004V9.46004Z" fill="#838688"/>
                        </svg>
                    </button>
                    <button :class="'product__compare'"  @click="addToCompareMethod">
                        <!-- <img src="../assets/images/compair.svg" alt=""> -->
                        <svg :class="{'product__compare--svg': true, compared : addToCompare}" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 10C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20C1.26522 20 1.51957 19.8946 1.70711 19.7071C1.89464 19.5196 2 19.2652 2 19V11C2 10.7348 1.89464 10.4804 1.70711 10.2929C1.51957 10.1054 1.26522 10 1 10ZM6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20C6.26522 20 6.51957 19.8946 6.70711 19.7071C6.89464 19.5196 7 19.2652 7 19V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0ZM16 14C15.7348 14 15.4804 14.1054 15.2929 14.2929C15.1054 14.4804 15 14.7348 15 15V19C15 19.2652 15.1054 19.5196 15.2929 19.7071C15.4804 19.8946 15.7348 20 16 20C16.2652 20 16.5196 19.8946 16.7071 19.7071C16.8946 19.5196 17 19.2652 17 19V15C17 14.7348 16.8946 14.4804 16.7071 14.2929C16.5196 14.1054 16.2652 14 16 14ZM11 6C10.7348 6 10.4804 6.10536 10.2929 6.29289C10.1054 6.48043 10 6.73478 10 7V19C10 19.2652 10.1054 19.5196 10.2929 19.7071C10.4804 19.8946 10.7348 20 11 20C11.2652 20 11.5196 19.8946 11.7071 19.7071C11.8946 19.5196 12 19.2652 12 19V7C12 6.73478 11.8946 6.48043 11.7071 6.29289C11.5196 6.10536 11.2652 6 11 6Z" fill="#838688"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product__bottom--bottom">
                <router-link to="/order" class="product__buy">
                    Купить в 1 клик
                </router-link>
                <button class="product__bascet" @click="showCartMethod">
                    <img v-if="showCart == true" src="../assets/images/basket.svg" alt="">
                    <img v-if="showCart == false" src="../assets/images/addToCart.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['product','title'],
    data() {
        return {
            showCart : true,
            addToLikes : false,
            addToCompare : false
        }
    },
    methods: {
        adsFav(id){
            this.addToLikes = !this.addToLikes
            if(this.$cookies.isKey('elteshfavs')) {
                let favs = JSON.parse(this.$cookies.get('elteshfavs'))
                let favsIndex = favs.findIndex(fav => fav == id)
                if(favsIndex == -1) {
                    favs.push(id)
                    this.$store.dispatch('setFav', {id, fav : true})
                    this.$store.dispatch('setMsg', {
                        text : 'Добавлено в избранные!',
                        class : 'success'
                    })
                } else {
                    favs.splice(favsIndex, 1)
                    this.$store.dispatch('setFav', {id, fav : false})
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
        toTop(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        showCartMethod(){
            setTimeout(() => {
                this.showCart = !this.showCart
            }, 200);
        },
        addToCompareMethod(){
            this.addToCompare = !this.addToCompare
        }
    },
    computed : {
        uri(){
            return this.$store.getters.getUri
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/Components/ProductItem.scss';
</style>