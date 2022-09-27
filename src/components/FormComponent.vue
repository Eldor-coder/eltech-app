<template>
  <div class="container">
    <div class="form">
        <div class="form__top">
            <h1 class="form__title">
                {{title}}
            </h1>
            <h2 class="form__msg" :class="{ show: show }" :style="{ 'background': msg.style}">
                {{msg.text}}
            </h2>
        </div>
        <form class="form__body  " @submit.prevent="checkForm">
            <div class="top ">
                <div class="form__left col-3 ">
                    <label for="fname" class="form__label">Имя</label>
                    <input type="text" v-model="name" class="form__input" id="fname" name="fname" placeholder="Введите имя">
                    <label for="tel" class="form__label">Телефон</label>
                    <input type="text" v-model="tel" class="form__input" id="tel" name="tel" placeholder="Введите номер телефон">
                    <button class="form__btn">Отправить</button>
                </div>
                <div class="form__right col-5 ">
                    <label for="message" class="form__label">Сообщение</label>
                    <textarea id="message" v-model="text" class="form__textarea" name="message"
                            rows="7" cols="33" placeholder="Введите сообщение">
                    </textarea>
                    <div class="form__check--box">
                        <input type="checkbox" v-model="check" class="form__checkbox" id="check" name="check" value="1">
                        <label for="check" class="form__label"> Отправляя данную форму вы соглашаетесь с политикой конфиденциальности</label><br>
                    </div>
                </div>
            </div>
            
        </form>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {
            msg: {
                text : '',
                style : ''
            },
            name: null,
            tel: null,
            text: null,
            check : false,
            show : false
        }
    },
    methods: {
        checkForm(){

            if (!(this.name && this.tel && this.text && this.check)) {
                this.show = true
                this.msg.text = 'Вы должны заполнить форму!'
                this.msg.style = 'red'
            } else {
                this.show = true
                this.msg.text = 'Сообщение отправлено'
                this.msg.style = 'green'
                
                this.tel = ''
                this.text = ''
                this.name = ''
                this.check = ''
            }
            setInterval(() => {
                this.show = false
            }, 10000);
        
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/var.scss';
    .form {
        margin-top: 40px;
        &__body {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .top, .bottom {
            
            display: flex;
            align-items: flex-start;
            // justify-content: space-between;
            gap: 40px;
        }
        &__left, &__right {
            display: flex;
            flex-direction: column;
            // justify-content: center;
        }
        &__title {
            font-weight: 700;
            font-size: 36px;
            line-height: 130%;
            color: $black;
            margin-bottom: 30px;
        }
        &__label {
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
            color: $black;
            margin-bottom: 8px;
        }
        &__input {
            padding: 10px 20px;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
            color: $grey;
            border: 1px solid #EAEAF0;
            border-radius: 5px;
            margin-bottom: 20px;
            width: 100%;
        }
        &__btn {
            padding: 13px 113px 14px 113px;
            background: $dark-blue;
            border-radius: 5px;
            font-weight: 700;
            font-size: 16px;
            line-height: 130%;
            color: $light-blue;
            width: 100%;

        }
        &__textarea {
            padding: 16px 20px 10px 20px;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
            color: $grey;
            resize: none;
            border: 1px solid #EAEAF0;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        &__top {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            position: relative;
        }
        &__msg {
            display: block;
            position: absolute;
            // right: -1500px;
            right: 0px;
            top: -2000px;
            width: 450px;
            text-align: center;
            padding: 10px 10px;
            border-radius: 5px;
            background: $red;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
            color: white;
            transition: .5s;
        }
        &__check--box {

        }
        &__checkbox{

        }
        
    }
    .show {
        top: 10px;
    }

    @media(max-width:768px) {
        .form {
            &__title {
                font-size: 24px;
            }
            &__body {
                display: flex;
                flex-direction: column;
            }
            &__left {
                @include fb(100%)
            }
            &__right {
                @include fb(100%)
            }
            &__btn {
                padding: 13px 28px;
            }
        }
    }
</style>