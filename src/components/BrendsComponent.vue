<template>
    <div class="brands">
        <div class="container">
            <div class="brands__box">
                <h1 class="brands__title">
                    Бренды
                </h1>
                <div class="brands__slider">
                    <div class="brands__content animate">
                        <div class="brands__slide">
                            <div v-for="brand of getBrands" :key="brand._id" class="brands__item">
                                <router-link :to="'/brand/' + brand._id">
                                    <img v-if="brand.img" :src="`https://wt.altech.uz/${brand.img}`" alt="">
                                    <img v-else src="../assets/images/logo.svg" alt="">
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="brands__slider">
                    <div class="brands__content1 animate">
                        <div class="brands__slide">
                            <div v-for="brand of getBrands" :key="brand._id" class="brands__item">
                                <router-link :to="'/brand/' + brand._id">
                                    <img v-if="brand.img" :src="`https://wt.altech.uz/${brand.img}`" alt="">
                                    <img v-else src="../assets/images/logo.svg" alt="">
                                </router-link>
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
    data() {
        return {
        //    brands : []
        }
    },
    methods: {
        
    },
    computed : {
        getBrands(){
            return this.$store.getters.getBrands
        }

        
    },
    created(){
        
    },
    beforeCreate(){
        this.$store.dispatch('setBrands')

    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/var';

    .brands {
        z-index: 10;
        margin-top: 50px;
        &__title {
            font-weight: 700;
            font-size: 36px;
            line-height: 130%;
            color: $black;
            margin-bottom: 20px;
        }
        &__box {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        &__slider {
            background-color: #fff;
            width: 1200px;
            margin: 10px auto;
            overflow: hidden;
            padding: 4rem;
            position: relative;
            display: flex;
            align-items: center;
        }
        &__content {
            display: flex;
            position: absolute;
            left: 0;
            // width: 200%;
            animation: marquee 100s linear infinite;
        }
        &__content1 {
            display: flex;
            
            position: absolute;
            right: 0;
            // width: 200%;
            animation: marqueee 100s linear infinite;
        }
        &__slide {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 20px;
            // width: 50%;
            float: left;
        }
        &__item {
            padding: 10px;
            a {
                background-color: #fff;
                padding: 15px;
                display: flex;
                align-items: center;
                height: 100%;
                transition: .3s;
            }

            img {
                width: 150px;
                height: 50px;
                // max-width: 80%;
                display: block;
                margin: auto;
            }
        }
    }

    .animate {
        transform: translate(0, -50%);
    }

    .animate:hover {
        animation-play-state: paused;
    }

    @-webkit-keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
        }
        @keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    @-webkit-keyframes marqueee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(100%);
        }
        }
        @keyframes marqueee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(100%);
        }
    }

    @media(max-width:375px){ 
        .brands {
            &__slider {
                max-width:375px
            }
        }
    }
    @media(max-width:320px){
        .brands {
            &__slider {
                max-width:320px
            }
        }
    }


</style>