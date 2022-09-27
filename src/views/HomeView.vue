<template>
  <div class="container">
      <div class="home__view">
        <brends-component></brends-component>
        <product-list></product-list>
        <!-- <the-news></the-news>  -->
        <!-- <button @click="topFunction()" class="toTopBtn" title="Go to top">Top</button> -->
      </div>
  </div>
</template>

<script>
// import TheNews from '@/components/TheNews'
import ProductList from '@/components/ProductList'
import BrendsComponent from '@/components/BrendsComponent'
import { onMounted } from 'vue'

export default {
    setup() {
        onMounted(() => {
        
        })
    },
    components : {
        // TheNews,
        ProductList,
        BrendsComponent
    },
    data() {
        return {
            count : -2,
            num : null,
            // btn : document.querySelector('.toTopBtn')
        }
    },
    watch : {
        $watch(){
            this.count = -2
        }
    },
    computed : {
        more(){
            return this.$store.getters.getMore
        }
    },
    methods: {
        topFunction(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        bottomVisible(){
            
            const scrollY = window.scrollY;
            const visible = document.documentElement.clientHeight;
            const pageHeight = document.documentElement.scrollHeight - 450;
            const bottomOfPage = visible + scrollY >= pageHeight
            return bottomOfPage || pageHeight < visible;
            
        },
        getNext(){
            this.count +=2
            if(this.count > 30) {
                this.$store.dispatch('setMore')
            } else {
                this.$store.dispatch('getProducts', this.count)
            }
        },
        // scrollFunction(){
        //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //         document.getElementById('myBtn').classList.add('none')
        //         // document.getElementById('myBtn').style.display = "block";
        //     } else {
        //         document.getElementById('myBtn').classList.remove('none')
        //         // document.getElementById('myBtn').style.display = "none";
        //     }
        // }
    },
    created(){
        this.count = -2
        this.getNext()
        // this.$store.dispatch('setCategoryBtn',false)
        window.addEventListener('scroll', () => {
            if(this.bottomVisible() && this.more) {
                this.getNext()
            }
        })

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // console.log(document.querySelector('.toTopBtn'));
        
        // window.onscroll =  {this.scrollFunction()};
        
    }

}
</script>

<style lang="scss" scoped>
    @import '../styles/var';


    #myBtn {
        display: none;
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        font-size: 18px;
        border: none;
        outline: none;
        background-color: red;
        color: white;
        cursor: pointer;
        padding: 15px;
        border-radius: 4px;
        &.none {
            display: none;
        }
    }

    #myBtn:hover {
        background-color: #555;
    }
</style>