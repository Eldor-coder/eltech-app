<template>
  <div class="slider__cmpnt">
        <div>
            <Splide :options="{
                perPage : 1,
                perMove : 1,
                autoplay : true,
                rewind : true,
                wheel : false,
                live : true,
                interval : 3000
                
            }" class="slider">
                <SplideSlide v-for="(img,index) of sliderImages" :key="index" :style="{
                    backgroundImage : 'url(' + require(`../assets/images/${img.path}`) + ')',
                    
                }" class="slide">
                </SplideSlide>
            </Splide>
        </div>
  </div>
</template>

<script>
import {Splide,SplideSlide} from '@splidejs/vue-splide';

export default {
    components: {
        Splide,
        SplideSlide,
    },
    computed : {
        sliderImages() {
            return this.$store.getters.getSliderImage
        }
    }
}
</script>

<style lang="scss">
    @import '@splidejs/vue-splide/css';
    @import '../styles/var.scss';
    .slider__cmpnt {
        width: 100%;
    }
    .slider {
        height: 400px;
        margin-left:auto;
        border-radius: 9px;
        overflow: hidden;
        z-index: 0;
    }
    .slide{
        height: 400px;
        @include bg;
        border-radius: 9px;  
    }
</style>