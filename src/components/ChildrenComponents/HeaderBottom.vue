<template>
    <div class="header__bottom">
        <div class="container">
            <div class="header__bottom--catalog col-3">
                <button @click="categoryActive(getCategoryActive = !getCategoryActive)">
                    <img src="../../assets/images/catalog.svg" alt="catalog">
                    Каталог товаров
                </button>
            </div>
            <div class="header__bottom--menu col-9">
                <ul class="header__bottom--list">
                    <li class="header__bottom--item" v-for="(item,index) in getMenu" :key="index">
                        <router-link class="header__bottom--link" :to="`/${item.path}`">
                            {{item.text}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <div  class="glass1"></div> -->
    </div>

</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            categoryActive(param) {
                this.$store.dispatch('categoryActive', param)
                return this.$store.dispatch('getCategories')
            }
        },
        computed: {
            getMenu() {
                return this.$store.getters.getMenu
            },
        },
        created() {
            this.$store.dispatch('getCategories')
            window.addEventListener("scroll", () => {
                if (window.scrollY > 173) {
                    document.querySelector(".header__bottom").classList.add("none");
                } else {
                    document.querySelector(".header__bottom").classList.remove("none");
                }
            });
        }
    }
</script>

<style lang="sass" scoped>
    @import '../../styles/Components/HeaderBottom'
</style>