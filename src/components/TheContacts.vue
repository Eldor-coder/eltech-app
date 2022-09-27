<template>
  <div class="container">
    <the-router :routerProps="{pageName1 : 'Контакты', pageName2 : '', pageName3 : ''}"></the-router>
    <div class="contacts">
        <h1 class="contacts__title">
            Контакты
        </h1>
        <div class="contacts__body">
            <div class="contacts__left col-4">
                <ul class="contacts__list">
                    <li class="contacts__item">
                        <p class="contacts__adress">
                            СПб, Ул. Дыбенко д.23 к.1
                        </p>
                        <a class="contacts__link" href="+7 (812) 509-23-43">+7 (812) 509-23-43</a>
                    </li>
                    <li class="contacts__item">
                        <p class="contacts__adress">
                            СПб, Пр. Энгельса д.113 к.2
                        </p>
                        <a class="contacts__link" href="+7 (812) 509-23-43">+7 (812) 509-23-43</a>
                    </li>
                    <li class="contacts__item">
                        <p class="contacts__adress">
                            СПб, Ул. Ленсовета д.81
                        </p>
                        <a class="contacts__link" href="+7 (812) 602-74-02">+7 (812) 602-74-02</a>
                    </li>
                    <li class="contacts__item">
                        <p class="contacts__adress">
                            СПб, ул. Тарасова д.10
                        </p>
                        <a class="contacts__link" href="+7 (967) 555-01-06">+7 (967) 555-01-06</a>
                    </li>
                </ul>
                <hr class="contacts__line">
                <div class="contacts__mail--box">
                    <img src="../assets/images/mail.png" alt="">
                    <a class="contacts__link" href="smart-tekhnika@gmail.com">smart-tekhnika@gmail.com</a>
                </div>
                <div class="contacts__jobtime--box">
                    <img src="../assets/images/clock.png" alt="">
                    <div>
                        <p class="contacts__jobtime--text">Режим работы</p>
                        <h3 class="contacts__jobtime--time">Пн-вс с 10:00 до 21:00</h3>
                    </div>
                </div>
            </div>
            <div class="contacts__right col-8">
                <img src="../assets/images/map.png" alt="" class="contacts__img">
            </div>
        </div>
    </div>
    <form-component :title="title"></form-component>
  </div>
</template>

<script>
import FormComponent from '@/components/FormComponent'

export default {
    data() {
        return {
            title : 'Связаться с нами'
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
    @import '../styles/Components/TheContacts'
</style>