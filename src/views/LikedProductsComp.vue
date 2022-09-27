<template>
    <div class="liked">
        <div class="row liked__box col-9">
            <div class="col-3 product__item" v-for="product of getLikedProducts" :key="product._id">
                <product-item :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted : {
        likedProducts(){
            return this.$store.getters.getLikedProducts
        }
    },
    created() {
        // this.$store.dispatch('setLikedProducts')
    },
}
</script>

<style lang="scss" scoped>

</style>