<template>
    <div class="wholesale ">
     <div class="container ">
        <the-router :routerProps="{pageName1 : 'Оптом', pageName2 : '', pageName3 : ''}"></the-router>
        <h1 class="wholesale__title">
            Оптом
        </h1>
        <p class="wholesale__text">
            Наш интернет-магазин специализируется на продаже различных моделей электротранспорта:
            <br><br>
            <ul class="wholesale__menu">
                <li class="wholesale__list">
                    гироскутеров 
                </li>
                <li class="wholesale__list">
                    мини-сигвеев 
                </li>
                <li class="wholesale__list">
                    моноколёс
                </li>
                <li class="wholesale__list">
                    электросамокатов
                </li>
            </ul>
            <br>
            Мы продаём гироскутеры как в розницу, так и оптом, по специальным ценам. Приглашаем к сотрудничеству оптовых покупателей! 
            <br><br>
            Вы хотите купить гироскутер в Москве оптом? Познакомьтесь с нашими оптовыми ценами, и вы убедитесь: наше предложение действительно выгодное. С нами сотрудничают десятки партнёров в Москве и регионах, закупая гироскутеры оптом: цена намного ниже розничной, что позволяет получать хороший доход от бизнеса. 
            <br><br>
            Продавая гироскутеры оптом в Москве, мы готовы организовать доставку любых моделей и в регионы России. Сотрудничайте с нами – это выгодно! 
            <br><br>
            Самые выгодные цены - от 5000 руб.!
        </p>
     </div>
    <form-component :title='title'></form-component>
  </div>
</template>

<script>
import FormComponent from '@/components/FormComponent'

export default {
    components : {
        FormComponent
    },
    data() {
        return {
            title : 'Заполните форму и мы свяжемся с вами'
        }
    },
    created(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        this.$store.dispatch('setMore')
        this.$store.dispatch('setToggleLoading', false)
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/var.scss';
    .wholesale {
        &__title {
            font-weight: 700;
            font-size: 36px;
            line-height: 130%;
            color: $black;
            margin-bottom: 30px;
        }
        &__text {
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: $black;
        }
        &__list {
            margin-left: 20px;
            list-style-type: circle;
        }
    }

    @media(max-width:768px){
        .wholesale{
            &__title {
                font-size: 28px;
            }
        }
    }
</style>