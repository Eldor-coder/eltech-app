<template>
  <div class="container">
    <the-router :routerProps="{pageName1 : 'Рассрочка', pageName2 : '', pageName3 : ''}"></the-router>
    <div class="installment">
        <div class="installment__info">
            <h1 class="installment__title">
                Рассрочка 0|0|18
            </h1>
            <img class="installment__img col-9" src="../assets/images/rassrochka1.png" alt="">
            <h2 class="installment__btitle">
                Как работает рассрочка
            </h2>
            <p class="installment__text">
                ТЕПЕРЬ КАРТУ ХАЛВА МОЖНО ОФОРМИТЬ В СЕТИ НАШИХ МАГАЗИНОВ СОВЕРШЕННО БЕСПЛАТНО. Это займёт не более 10 минут. С собой необходимо иметь лишь паспорт.
                <br><br>
                С картой «Халва» сотрудничают более 200 000 партнёров от продуктовых магазинов до компаний продающих крупную бытовую технику и даже мебель, у которых покупки можно делать в бесплатную рассрочку. Сумма каждой такой покупки делится на равные части (по количеству месяцев рассрочки у партнёра). Раз в месяц «части» по всем покупкам суммируются и выставляются единым Платежом по рассрочке (дата выставления платежа равна дате оформления карты). 
            </p> <br>
            <p class="installment__text bg__yellow">
                Проценты по вашей рассрочке за покупку в нашем магазине платит за вас НАШ МАГАЗИН
            </p>
            <img class="installment__img col-9" src="../assets/images/rassrochka2.png" alt="">
            <p class="installment__text">
                Подключите подписку "Халва Десятка" и делайте любые покупки у партнеров с единым увеличенным сроком рассрочки 10 месяцев.
                <br><br>
                Можно расширить срок до 18-ти месяцев.
            </p>
        </div>
        <div class="installment__book--box">
            <div class="installment__form--box">
                <h3 class="installment__form--title">
                    Оформить РАССРОЧКУ
                </h3>
                <label for="fname" class="installment__form--label">Имя</label>
                <input type="text" v-model="name" class="installment__form--input" id="fname" name="fname" placeholder="Введите имя">
                <label for="tel" class="installment__form--label">Телефон</label>
                <input type="text" v-model="tel" class="installment__form--input" id="tel" name="tel" placeholder="Введите номер телефон">
                <button class="installment__form--btn">Отправить</button>
            </div>
            <div class="installment__bank--info">
                <h3 class="installment__bank--title">
                    Мобильное приложение «Совкомбанк – Халва»
                </h3>
                <p class="installment__bank--text">
                    Мобильный банковский офис, который всегда с вами:
                </p>
                <ul>
                    <li class="installment__bank--list">
                        контроль вашей карты «Халва»
                    </li>
                    <li class="installment__bank--list">
                        наиболее востребованные банковские функции
                    </li>
                    <li class="installment__bank--list">
                        круглосуточный чат с поддержкой
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
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
    .installment {
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
            margin-bottom: 20px;
        }
        &__img {
            margin-bottom: 30px;
        }
        &__text {
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: $black;
        }
        .bg__yellow {
            background: yellow;
            display: inline-block;
            margin-bottom: 30px;
        }
        &__book{
            &--box{
                display: flex;
                align-items: center;
                gap: 60px;
                margin-top: 30px;
            }
        }
        &__form{
            &--box {
                display: flex;
                flex-direction: column;
                background: #EDF2F6;
                padding: 30px;
                border-radius: 8px;
            }
            &--title {
                font-weight: 600;
                font-size: 24px;
                line-height: 120%;
                color: $black;
                margin-bottom: 20px;
            }
            &--label {
                font-weight: 400;
                font-size: 16px;
                line-height: 100%;
                color: $black;
                margin-bottom: 8px;
            }
            &--input {
                padding: 10px 20px 16px 20px;
                font-weight: 400;
                font-size: 16px;
                line-height: 100%;
                color: $grey;
                border: 1px solid #EAEAF0;
                border-radius: 5px;
                margin-bottom: 20px;
            }
            &--btn {
                padding: 13px 113px 14px 113px;
                background: $dark-blue;
                border-radius: 5px;
                font-weight: 700;
                font-size: 16px;
                line-height: 130%;
                color: $light-blue;
            }
        }
        &__bank {
            &--info {
                width: 433px;
            }
            &--title {
                font-weight: 600;
                font-size: 24px;
                line-height: 120%;
                margin-bottom: 20px;
            }
            &--text, &--list {
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
            } 
            &--list {
                list-style-type: circle;
                margin-left: 20px;
            }
        }
    }
</style>