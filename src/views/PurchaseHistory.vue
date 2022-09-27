<template>
  <div class="purchase">
    <h1 class="purchase__title">
        История покупок
    </h1>
    <div class="purchase__box">
        <ul class="purchase__list accordion">
            <li  class="purchase__item contentBx">
                <div class="purchase__label label">
                    <div class="purchase__book">
                        Заказ #9 от 04.07.2021
                    </div>
                    <div class="purchase__price">
                        2 товара на сумму 15 600 ₽
                    </div>
                    <div class="purchase__proccess">
                        В процессе
                    </div>
                    <!-- <button  class="purchase__btn"> -->
                        <!-- <img src="../assets/images/arrow.svg" alt=""> -->
                    <svg @click="showAccordion($event)" class="purchase__btn--svg" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="purchase__btn--path" d="M6.79171 10.1891C6.6337 10.3575 6.3663 10.3575 6.20829 10.1891L1.50288 5.17368C1.26324 4.91825 1.44435 4.5 1.7946 4.5L11.2054 4.5C11.5557 4.5 11.7368 4.91825 11.4971 5.17368L6.79171 10.1891Z" fill="#070C11"/>
                    </svg>
                    <!-- </button> -->
                </div>
                <div class="content">
                    <div class="content__element">
                        <img class="product__img" src="../assets/images/ssd-product.jpg" alt="">
                        <router-link class="product__link" to="/">
                            SSD Golden Memory 120GB SATA III 2,5"
                        </router-link>
                        <div class="product__price">
                            {{15000}} сум
                        </div>
                    </div>        
                </div>
            </li>
            <li  class="purchase__item contentBx">
                <div class="purchase__label label">
                    <div class="purchase__book">
                        Заказ #1 от 04.07.2021
                    </div>
                    <div class="purchase__price">
                        2 товара на сумму 15 600 сум
                    </div>
                    <div class="purchase__proccess done">
                        Выполнен
                    </div>
                    <!-- <button  class="purchase__btn"> -->
                        <!-- <img src="../assets/images/arrow.svg" alt=""> -->
                    <svg @click="showAccordion($event)" class="purchase__btn--svg" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="purchase__btn--path" d="M6.79171 10.1891C6.6337 10.3575 6.3663 10.3575 6.20829 10.1891L1.50288 5.17368C1.26324 4.91825 1.44435 4.5 1.7946 4.5L11.2054 4.5C11.5557 4.5 11.7368 4.91825 11.4971 5.17368L6.79171 10.1891Z" fill="#070C11"/>
                    </svg>
                    <!-- </button> -->
                </div>
                <div class="content">
                    <div class="content__element">
                        <img class="product__img" src="../assets/images/ssd-product.jpg" alt="">
                        <router-link class="product__link" to="/">
                            SSD Golden Memory 120GB SATA III 2,5"
                        </router-link>
                        <div class="product__price">
                            {{15000}} сум
                        </div>
                    </div>
                    <div class="content__element">
                        <img class="product__img" src="../assets/images/ssd-product.jpg" alt="">
                        <router-link class="product__link" to="/">
                            SSD Golden Memory 120GB SATA III 2,5"
                        </router-link>
                        <div class="product__price">
                            {{15000}} сум
                        </div>
                    </div>
                    <div class="content__element">
                        <img class="product__img" src="../assets/images/ssd-product.jpg" alt="">
                        <router-link class="product__link" to="/">
                            SSD Golden Memory 120GB SATA III 2,5"
                        </router-link>
                        <div class="product__price">
                            {{15000}} сум
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
    <the-buttons></the-buttons>
</template>

<script>
import TheButtons from '@/components/TheButtons';

export default {
    data() {
        return {
            
        }
    },
    components : {
        TheButtons
    },
    methods: {
        showAccordion(e){
            if(e.target.classList == 'purchase__btn--svg') {
                e.target.parentElement.parentElement.classList.toggle('active')
                e.target.classList.toggle('active') 
            } else if (e.target.classList == 'purchase__btn--path') {
                e.target.parentElement.parentElement.parentElement.classList.toggle('active')
                e.target.parentElement.classList.toggle('active') 
            }
                       
        },
        showShoppings(){

        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .purchase {
        margin-left: 20px;
        background: #FBFDFF;
        border: 1px solid #EAEAF0;
        border-radius: 8px;
        padding: 50px;
        color: $black;
        margin-bottom: 50px;
        &__title{
            font-weight: 600;
            font-size: 24px;
            line-height: 120%;
            margin-bottom: 20px;
            
        }
        &__box{

        }
        &__list:first-child{
            border-top: 1px solid #C8CACB;
        }
        &__item {
            padding: 20px 0px;
            border-bottom: 1px solid #C8CACB;
            border-left: unset;
            border-right: unset;
        }
        table {
            width: 100%;
        }
        &__label {
            display: flex;
            align-items: center;
            justify-content: space-between;
            
        }
        &__book, &__price {
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
        }
        &__proccess {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #FBB13C;
            &.done {
                color: #22A44E;
            }
        }
        &__btn {
            background: unset;
            border: none;            
            display: flex;
            align-items: center;
            justify-content: center;
             width: 30px;
            height: 30px;
            z-index: 5;
            &--svg {
                cursor: pointer;
                width: 20px;
                height: 20px;
                transition: .5s;
                &.active {
                    transform: rotate(180deg);
                }
            }
        }
        
    }
    .product {
        &__list {

        }
        &__img {
            width: 40px;
            height: 40px;
        }
        &__item{
            display: inline;
        }
        &__price {
            color: $black;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
        }
    }
    .accordion {
            max-width: 800px;
        }
        .accordion .contentBx {
            position: relative;
        }
        .accordion .contentBx .label {
            position: relative;
            // padding: 10px;
            // background: $light-blue;
            // color: #22A44E;
            // cursor: pointer;
        }
        // .accordion .contentBx .label::before {
        //     content:  '+';
        //     position: absolute;
        //     top: 50%;
        //     right: 20px;
        //     transform: translateY(-50%);
        //     font-size: 1.5em;
        // }
        .accordion .contentBx .content {
            position: relative;
            background: #EDF2F6;
            height: 0;
            overflow: hidden;
            transition: .5s;
            overflow-y: auto;
        }

        .accordion .contentBx.active .content {
            height: 150px;
            padding: 10px;
        }
        .content {
            margin-top: 5px;
            &__element {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-bottom: 10px;
                border-bottom: 1px solid rgba(231, 229, 243, 0.992);
                // margin-bottom: 10px;
            }
            overflow: auto;
            scrollbar-color: #838688 #EDF2F6;
            scrollbar-width: thin;
            &::-webkit-scrollbar {
                width: 4px;
            }
            &::-webkit-scrollbar-track {
                background-color: #EDF2F6;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 5px;
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
        }
        
</style>