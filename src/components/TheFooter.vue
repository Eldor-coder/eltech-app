<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <div class="footer__top--one col-6 col-sm-12">
                     <div class="footer__left--left  col-sm-6">
                        <div class="footer__logo">
                            <router-link to="/">
                                <img src="../assets/images/footer-logo.svg" alt="logo">
                            </router-link>
                        </div>
                        <div class="footer__contacts">
                            <a href="tel: +7 (958) 111-95-03"> +7 (958) 111-95-03</a>
                            <a href="tel: +7 (958) 111-95-03"> +7 (958) 111-95-03</a>
                            <span>Пн-вс: с 10:00 до 21:00</span>
                        </div>
                        <div class="footer__location">
                            <img src="../assets/images/location.svg" alt="location">
                            <a href="https://g.page/altechshop?share">Чапаната 8, 1 Ташкент</a>
                        </div>
                    </div>
                    <div class="footer__left--right  col-sm-6">
                        <h3 class="footer__title">
                            Для клиента
                        </h3>
                        <ul class="footer__list">
                            <li class="footer__item">
                                <router-link to="/" class="footer__link">
                                    Как купить
                                </router-link>
                            </li>
                            <li class="footer__item">
                                <router-link to="/" class="footer__link">
                                    Доставка и оплата
                                </router-link>
                            </li>
                            <li class="footer__item">
                                <router-link to="/" class="footer__link">
                                    Кредит
                                </router-link>
                            </li>
                            <li class="footer__item">
                                <router-link to="/" class="footer__link">
                                    Политика конфиденциальности
                                </router-link>
                            </li>
                            <li class="footer__item">
                                <router-link to="/" class="footer__link">
                                    Вопросы и ответы (F.A.Q.)
                                </router-link>
                            </li>
                            <li class="footer__item">
                                <router-link to="/services" class="footer__link">
                                    Сервис и гарантия
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__top--two col-6 col-sm-12">
                    <div class="footer__right--left  col-sm-6">
                        <h3 class="footer__title">
                            О магазине
                        </h3>
                        <ul class="footer__list">
                            <li class="footer__item">
                                <router-link to="/" class="footer__link">
                                    Отзывы
                                </router-link>
                            </li>
                            <li class="footer__item">
                                <router-link to="/" class="footer__link">
                                    Наши преимущества
                                </router-link>
                            </li>
                            <li class="footer__item">
                                <router-link to="/" class="footer__link">
                                    История компании
                                </router-link>
                            </li>
                            <li class="footer__item">
                                <router-link to="/" class="footer__link">
                                    Сотрудничество
                                </router-link>
                            </li>
                            <li class="footer__item">
                                <router-link to="/" class="footer__link">
                                    Партнёрская программа
                                </router-link>
                            </li>
                            <li class="footer__item">
                                <router-link to="/vacansy" class="footer__link">
                                    Вакансии
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__right--right  col-sm-6">
                        <h3 class="footer__title">
                            Сотрудничество
                        </h3>
                        <ul class="footer__list">
                            <li class="footer__item">
                                <router-link to="/wholesale" class="footer__link">
                                    Оптом
                                </router-link>
                            </li>
                            <li class="footer__item">
                                <router-link to="/dropshipping" class="footer__link">
                                    Дропшиппинг
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>           
            </div>
            <div class="footer__bottom">
                <div class="footer__bottom--left ">
                    <span>
                        SmartТехника © 2021 <br>
                        Все права защищены
                    </span>
                </div>
                <div class="footer__bottom--center col-6">
                    <div class="footer__socials">
                        <ul class="footer__socials--list">
                            <li class="footer__socials--item">
                                <a href="https://t.me/altechuzz">
                                    <img src="../assets/images/telegram.svg" alt="tg">
                                </a>
                            </li>
                            <li class="footer__socials--item">
                                <a href="https://instagram.com/altech.uz">
                                    <img src="../assets/images/instagram.svg" alt="insta">
                                </a>
                            </li>
                            <li class="footer__socials--item">
                                <a href="https://facebook.com/altech.uz">
                                    <img src="../assets/images/facebook.svg" alt="fcb">
                                </a>
                            </li>
                            <li class="footer__socials--item">
                                <a href="https://www.youtube.com/channel/UCYWWBWGG-pjtJI4MbEyxTLA">
                                    <img src="../assets/images/youtube.svg" alt="ytb">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__bottom--right col-3">
                    <span>
                        Created by : 
                    </span>
                    <div class="footer__img__box" >
                        <!-- style="{backgroundImage : url('../assets/images/eldor.jpg')}" -->
                        <img class="footer__creator__img" src="../assets/images/eldor.jpg" alt="creator__img">
                    </div>
                    <div>
                        <a href="https://t.me/elgunner">Eldor</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    @import '../styles/Components/TheFooter';
    @import '../styles/var';
    
    
</style>