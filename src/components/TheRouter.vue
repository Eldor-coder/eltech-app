<template>
    <div class="router">
        <div class="container">
            <router-link to="/" class="router__first">
                Главная
            </router-link>
            <div class="router__next--box">
                <img src="../assets/images/triangle.svg" alt="">
                <h4 class="router__last" v-if="routerProps.pageName3 !== '' || routerProps.pageName2 == ''">
                    {{routerProps.pageName1}}
                </h4>
                <button class="router__last btn" v-else @click="back">
                    {{routerProps.pageName1}}
                </button>
            </div>
            <div class="router__next--box" v-if="routerProps.pageName2">
                <img src="../assets/images/triangle.svg" alt="">
                <h4 class="router__last" v-if="routerProps.pageName3 == ''" >
                    {{routerProps.pageName2}}
                </h4>
                <button class="router__last btn" v-else @click="back">
                    {{routerProps.pageName2}}
                </button>
            </div>
            <div class="router__next--box" v-if="routerProps.pageName3">
                <img src="../assets/images/triangle.svg" alt="">
                <h4 class="router__last">
                    {{routerProps.pageName3}}
                </h4>
            </div>
        </div>
  </div>
</template>

<script>

export default {
    props : ['routerProps'],
    data() {
        return {
           
        }
    },
    methods: {
        back(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/var.scss';
    .router {
        .container {
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 0;
        }
        .btn {
            background: unset;
        }
        &__first {
            font-weight: 400;
            font-size: 16px;
            line-height: 120%;
            color: $black;
        }
        &__next {
            &--box {
                display: flex;
                align-items: center;
                gap: 15px;
            }
        }
        &__last {
            font-weight: 400;
            font-size: 16px;
            line-height: 120%;
            color: $grey;
        }
    }
</style>