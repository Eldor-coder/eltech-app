<template>
  <div class="container">
  <the-router :routerProps="{pageName1 : 'Дропшиппинг', pageName2 : '', pageName3 : ''}"></the-router>
    <div class="dropshipping">
        <h1 class="dropshipping__title">
            Дропшиппинг
        </h1>
        <p class="dropshipping__text">
            Хотите начать прибыльный бизнес с минимальными вложениями? Предлагаем стать нашим партнёром на основе дропшипинга! Вы сможете продавать десятки моделей гироскутеров, моноколёс, мини-сигвеев и электросамокатов на своём сайте, не заботясь о закупке товара и организации доставки. 
            <br><br>
            Дропшипинг – это модель продаж, в которой вы через свой сайт привлекаете клиентов и продаёте им товар, а обработка заказов производится крупным партнёром. Ваши вложения ограничиваются созданием и продвижением интернет-сайта.
            <br><br>
            Продажа гироскутеров на основе дропшиппинга строится следующим образом: 
            <br><br>
            <ul>
                <li class="dropshipping__list">
                    Вы создаёте сайт, на котором продаёте гироскутеры, представленные в нашем магазине. Весь наш ассортимент – в вашем распоряжении. Ваша задача сводится к продвижению своего сайта и привлечению покупателей. 
                </li>
                <li class="dropshipping__list">
                    Покупателей вы перенаправляете к нам. Мы организуем доставку и приём оплаты. 
                </li>
                <li class="dropshipping__list">
                    Вы получаете свой процент от совершённой покупки.
                </li>
            </ul>
        </p>
        <h2 class="dropshipping__btitle">
            Модель дропшиппинга позволяет начать своё дело даже новичку в бизнесе. 
        </h2>
        <p class="dropshipping__text">
            Вам не нужно вкладывать деньги в товар, заключать договоры с производителями, договариваться о доставке и растаможке. Вам не потребуются ни склады, ни торговые помещения, ни персонал. Создать интернет-магазин гироскутеров на основе дропшиппинга – несложно и недорого! 
        </p>
    </div>
       <form-component :title='title'></form-component>
  </div>
</template>

<script>
import FormComponent from '@/components/FormComponent'

export default {
    data() {
        return {
            title : 'Заполните форму и мы свяжемся с вами'
        }
    },
     components : {
        FormComponent
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
    .dropshipping {
        &__title {
            font-weight: 700;
            font-size: 36px;
            line-height: 130%;
            color: $black;
            margin-bottom: 30px;
        }
        &__btitle {
            font-weight: 600;
            font-size: 24px;
            line-height: 120%;
            color: $black;
            margin-top: 40px;
            margin-bottom: 20px;
        }
        &__text {
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: $black;
        }
        &__list {
            margin-left: 20px;
            list-style-type: decimal;
        }
    }
</style>