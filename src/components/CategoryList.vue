<template>
    <div class="category">
        <div class="category__top">
            <div class="container">
                <div class="col-3">
                    <div class="category__top--catalogs" :class="{'active' : getCategoryActive}">
                        <ul class="category__top--list">
                            <li class="category__top--item" v-for="(cat) of categories" :key="cat._id"
                                @mouseenter="mousEnter(cat._id,$event)" @mouseleave="mousLeave($event)">
                                <div class="category__top--link">
                                    <img  class="category__top--img"
                                        :src="(`${uri}/${cat.icon}`)" alt=""
                                    >
                                        <!-- src="../assets/images/cooler.png" -->
                                        <!-- {{catImages[index].path}} -->
                                        {{cat.title}}
                                    <img v-show="showTriangle" class="category__top--triangle" 
                                        src="../assets/images/triangle.svg" alt="">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div v-if="showSlider" class="slider col-9">
                    <slider-component></slider-component>
                </div>
                <div 
                    class="category__subcategory col-9" 
                    v-show="subcategory.length>0"
                    @mouseenter="showSubCat"
                    @mouseleave="mousLeave"
                >
                    <ul class="category__subcategory__menu">
                        <li class="category__subcategory__item" v-for="(subcat) of subcategory" :key="subcat._id">
                            <router-link 
                                :to="'/subcategory/' + subcat._id" 
                                class="category__subcategory__link"

                            >
                                <img  class="category__subcategory__img"
                                    :src="require(`../assets/images/${subcat.path}`)" alt=""
                                >
                                {{subcat.title}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SliderComponent from '@/components/SliderComponent'

    export default {
        data() {
            return {
                subcategory: [],
                isActive: false,
                id : null,
                showTriangle : false,
                to : '',
                from : '',
                showSlider : true,
            }
        },
        components : {
            SliderComponent
        },
        methods: {
            showSubCat(){
                
                this.$store.dispatch('setSubCategories')
                this.subcategories.forEach(subcat => {
                    if (subcat.category == this.id) {
                        this.subcategory.push(subcat)
                    }
                })
            },
            mousEnter(id,event) {
                this.id = id
                this.showTriangle = true
                this.$store.dispatch('setSubCategories')
                this.subcategories.forEach(subcat => {
                    if (subcat.category == id) {
                        this.subcategory.push(subcat)
                    }
                })
                if(event.target.lastChild.lastChild.classList.value == "category__top--triangle"){
                    event.target.lastChild.lastChild.classList.add('active')
                }
            },
            mousLeave(event) {
                this.showTriangle = false
                this.subcategory = []
                if(event.target.classList.value == "category__top--item") {
                    event.target.lastChild.lastChild.classList.remove('active')
                }
            }
        },
        computed: {
            subcategoryImages() {
                return this.$store.getters.getSubcategoryImages
            },
            subcategories() {
                return this.$store.getters.getSubCategories
            },
            getCategoryActive() {
                return this.$store.getters.categoryActive
            },
            categories() {
                return this.$store.getters.getCategories
            },
            catImages() {
                return this.$store.getters.getCategoryImages
            },
            uri(){
                return this.$store.getters.getUri
            }
            
        },
        watch : {
            $route(to, from){
                if (to.path !== '/') {
                    this.showSlider = false
                    this.$store.dispatch('categoryActive', false)
                } else if (to.path == '') {
                    this.showSlider = true
                    this.$store.dispatch('categoryActive', false)
                } else if (from.path !== '') {
                    this.showSlider = true
                    this.$store.dispatch('categoryActive', false)
                }
                
            }
        },
        created(){
            this.$store.dispatch('categoryActive', false)
        }
    }
</script>

<style lang="scss">
    @import '../styles/Components/CategoryList';
</style>