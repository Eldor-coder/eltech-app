<template>
    <div class="about">
        <div class="container">
        <the-router :routerProps="{pageName1 : 'О нас', pageName2 : '', pageName3 : ''}"></the-router>
        <h1 class="about__title">
            О нас
        </h1>
        <p class="about__text">
            Официальный представитель производителей эксклюзивного электротранспорта и Смарт-Техники Созданная в 2015 году компания Смарт-Техника стала одним из первых дистрибьютеров персонального электротранспорта в России и уже более трёх лет является официальным представителем таких производителей эксклюзивного электронного транспорта, как <strong>Yamato, SmartONE, HALTEN и Kugoo</strong>
        </p>
        <h2 class="about__subtitle">
            Постоянно растущая и развивающаяся Компания
        </h2>
        <p class="about__text">
            На сегодняшней день Компания Смарт-Техника обладает собственным розничным магазинами в г Санкт-Петербурге, официальными представительствами в различных районах г. СПб и Ленобласти, сетью складов в Петербурге, Москве и других крупных городах России. Мы постоянно растём и развиваемся. Доставка наших товаров осуществляется во все регионы Страны!
        </p>
        <h2 class="about__subtitle">
            Самый большой выбор персонального электротранспорта
        </h2>
        <p class="about__text">
            Самый большой выбор персонального электротранспорта представлен в выставочных залах Смарт-Техника по адресам:
            <br>
            <strong>ул. Ленсовета 81;</strong> <br>
            <strong>ул. Дыбенко 23к1;</strong> <br>
            <strong>пр. Энгельса 113 к 2.</strong> <br>
            Расширение ассортимента происходит стабильно раз в полгода, и вы всегда найдёте у нас самые эксклюзивные модели электронного транспорта нового поколения!
        </p>
        <h2 class="about__subtitle">
            Опытный и высококвалифицированный персонал
        </h2>
        <p class="about__text">
            В компании работают опытные высококвалифицированные сотрудники, всегда готовые помочь вам с выбором персонального транспортного средства, ответить на все возможные вопросы и научить кататься на выбранной вами модели
        </p>
        <h2 class="about__subtitle">
            Возможность тест драйва
        </h2>
         <p class="about__text">
            Благодаря месторасположению и инфраструктуре прилегающей к магазинам территорий, наши посетители могут перед оформлением покупки пройти тест-драйв на любом из представленных в зале транспортных средств. <br> <br>
            Для тест-драйва крупной техники необходима предварительная запись. Её можно осуществить по телефону: <a class="about__tel" href="+7 (812) 509-23-43">+7 (812) 509-23-43</a> <strong>или через консультанта в магазине</strong>.
        </p>
        <h2 class="about__subtitle">
            Цель и миссия компании Смарт-Техника.рф
        </h2>
        <p class="about__text">
            <strong>Цель компании Смарт Техника</strong> — в 2020 году стать самым крупным магазином по продаже персонального электротранспорта в Санкт-Петербурге. А также открывать свои филиалы во всех крупных городах России, что происходит уже сейчас. <br> <br>
            <strong>Миссия компании Смарт Техника</strong> — познакомить россиян с экологически чистыми видами транспорта и улучшить экологию Страны! Мы надеемся не просто привить нашей нации любовь к ЭКО-транспорту, а создать в стране новую культуру передвижения.
        </p>
        <strong class="about__offer">Мы всегда рады взаимовыгодному сотрудничеству. <br> Свои предложения отправляйте <a  class="about__link" href="smartfamily.info@yandex.ru">smartfamily.info@yandex.ru</a></strong>
    </div>
  </div>
</template>

<script>
// import TheRouter from '@/components/TheRouter'

export default {
    component : {
        // TheRouter
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

<style lang="scss">
    @import '../styles/var';
    .about {
            font-weight: 700;
            font-size: 16px;
            line-height: 130%;
        
        &__title {
            color : $black;
            margin-bottom: 30px;
        }
        &__text {
            font-weight: 400;
            color : $black;
            margin-bottom: 40px;
        }
        &__subtitle{
            font-weight: 600;
            font-size: 24px;
            line-height: 120%;
            color : $black;
            margin-bottom: 20px;
        }
        &__offer{
            font-size: 28px;
            line-height: 120%;
            color: $black;
        }
        &__link {
            font-size: 28px;
            line-height: 120%;
            color: $dark-blue;
        }
        &__tel {
            font-weight: 700;
            font-size: 16px;
            line-height: 130%;
            color: $dark-blue;
        }
    }

    @media(max-width:412px){
        .about {
            @include fb(100%);
            &__subtitle {
                font-weight: 500;
                font-size: 18px;
            }
            &__offer {
                font-size: 18px;
            }
            &__link {
                font-weight: 500;
                font-size: 18px;
            }
            &__text {
                font-size: 14px;
            }
        }
    }

    @media(max-width:360px){ 
        .about {
           
            &__offer {
                font-size: 24px;
            }
            &__link {
                font-weight: 500;
                font-size: 22px;
            }
        }
    }
    @media(max-width: 280px){ 
        .about {
            &__title {
                font-size: 24px;
            }
            &__text {
                font-size: 14px;
            }
             &__subtitle {
                font-size: 16px;
            }
            &__offer {
                font-size: 18px;
            }
            &__link {
                font-size: 18px;
            }
            // &__tel {
            //     font-size: 18px;
            // }
        }
    }
</style>