<template>
  <div class="container">
    <div class="characteristics col-7">
        <h1 class="characteristics__title">
            Характеристики {{product.title}}
        </h1>
        <p class="characteristics__text">
            <ul class="characteristics__list">
                <li class="characteristics__item" v-for="item of product.atribut" :key="item._id">
                    <h5 class="characteristics__attr--title">
                        {{item.atr.title}}
                    </h5>
                    <p class="characteristics__attr--spec">
                        {{item.spec}}
                    </p>
                </li>
            </ul>
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
    .characteristics {
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
        &__item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 25px 20px;
            border-radius: 8px;
            &:nth-child(odd) {
                background: $white;
                color: #436f95;
            }
            &:nth-child(even){
                background: #436f95;
                color: $white;
            }
        }
        &__attr {
            &--title {
                font-weight: 700;
                font-size: 16px;
                line-height: 130%;
            }
            &--spec {
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
                // margin-left: auto;
            }
        }
    }
</style>