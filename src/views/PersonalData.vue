<template>
  <div class="personal">
    <form class="form__box" @click.prevent="personal">
        <div class="personal__box--left">
            <label class="personal__label" for="name">Имя</label>
            <input v-model="data.name" class="personal__input" type="text" id="name" name="personal__data" placeholder="Имя">
            <label class="personal__label" for="mail">Эл. почта</label>
            <input v-model="data.email" class="personal__input" type="email" id="mail" name="personal__data" placeholder="Эл. почта">
            <label class="personal__label" for="phone">Телефон</label>
            <input  v-maska="'+998(##) ###-##-##'" v-model="data.phone" class="personal__input"  id="phone" name="personal__data" placeholder="+998 (__) ___ __ __">
            <label class="personal__label" for="city">Город</label>
            <input v-model="data.city" class="personal__input" type="text" id="city" name="personal__data" placeholder="Город">
            <label class="personal__label" for="index">Индекс</label>
            <input v-model="data.index" class="personal__input" type="text" id="index" name="personal__data" placeholder="Индекс">
        </div>
        <div class="personal__box--right">
            <label class="personal__label" for="adress">Адрес</label>
            <input v-model="data.adress" class="personal__input" type="text" id="adress" name="personal__data" placeholder="Не указан">
            <label class="personal__label" for="payment">Предпочитаемый способ оплаты</label>
            <select v-model="data.payment" class="personal__select" name="personal__data" id="payment">
                <option class="personal__option" value="card">Карта</option>
                <option class="personal__option" value="cash">Наличные</option>
            </select>
            <label class="personal__label" for="delivery">Предпочитаемый способ доставки</label>
            <select v-model="data.delivery" class="personal__select" name="personal__data" id="delivery">
                <option class="personal__option" value="delivery" >Доставка</option>
                <option class="personal__option" value="pickup">Самовывоз</option>
            </select>
            <label class="personal__label" for="photo">Аватар</label>
            <input v-model="data.photo" class="personal__input" type="text" id="photo" name="personal__data" placeholder="скинь ссылку на картинку из интернета">
            <button @click="sendPersonalData" class="personal__save--btn">
                Сохранить
            </button>
        </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            data : {
                name : '',
                email : '',
                phone : '+998',
                city : '',
                index : '',
                adress : '',
                payment : 'card', 
                delivery : 'delivery',
                photo : ''
            }
        }
    },
    methods: {
        async sendPersonalData(){
            let userID = this.$cookies.get('eltechusers')
            let clearUserID = userID.slice(1, userID.length - 1)
            
            const response = await fetch(`https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users/${clearUserID}/personalData.json`, {
                method : 'PUT',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    "firstName" : this.data.name,
                    "email" : this.data.email,
                    "phone" : this.data.phone,
                    "city" : this.data.city,
                    "index" : this.data.index,
                    "adress" : this.data.adress,
                    "payment" : this.data.payment,
                    "delivery" : this.data.delivery,
                    "photo" : this.data.photo
                })
            })

            this.$store.dispatch('setMsg', {
                text : 'Ваша информация была изменена',
                class : 'success'
            })
            const firebaseData = await response.json()
            console.log(firebaseData);
        }
    },
    created(){
        let userID = this.$cookies.get('eltechusers')
        let clearUserID = userID.slice(1, userID.length - 1)
        axios.get(`https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users/${clearUserID}/personalData.json`)
        .then(res => {
            this.data = {
                name : res.data.firstName,
                email : res.data.email,
                phone : res.data.phone,
                city : res.data.city,
                index : res.data.index,
                adress : res.data.adress,
                payment : res.data.payment, 
                delivery : res.data.delivery,
                photo : res.data.photo
            }
        })        
        
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .personal {
        color: $black;
        padding-left: 135px;
        &__box {
            &--left {
                display: flex;
                flex-direction: column;
            }
            &--right {
                display: flex;
                flex-direction: column;
            }
        }
        .form__box {
            display: flex;
            align-items: flex-start;
            gap: 20px;
        }
        &__label,&__input{
            margin-bottom: 8px;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
        }
        &__input {
            padding: 16px 20px;
            margin-bottom: 20px;
            border: 1px solid #EAEAF0;
            border-radius: 5px;
            width: 300px;
        }
        &__select {
            padding: 16px 0px 16px 20px;
            margin-bottom: 20px;
            border: 1px solid #EAEAF0;
            border-radius: 5px;
        }
        &__save {
            &--btn {
                margin-top: 28px;
                padding: 16px 80px;
                font-weight: 500;
                font-size: 16px;
                line-height: 100%;
                color: #FFFFFF;
                background: $dark-blue;
                border-radius: 5px;
                border: none;
            }
        }
       
    }
</style>