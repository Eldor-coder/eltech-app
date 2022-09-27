<template>
  <div class="container">
    <div class="description col-7">
        <h1 class="description__title">
            Описание {{product.title}}
        </h1>
        <p class="description__text">
            {{product.descriptions}}
        </p>
    </div>
  </div>
</template>

<script>
export default {
    computed : {
        product(){
            return this.$store.getters.getOneProduct
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../styles/var.scss';
    .description {
        color: $black;
        &__title {
            font-weight: 700;
            font-size: 28px;
            line-height: 120%;
            margin-bottom: 30px;
        }
        &__text {
            font-weight: 400;
            font-size: 16px;
            line-height: 120%;
        }
    }
</style>