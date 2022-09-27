<template>
  <div class="geninfo">
    <div class="col-9">
        <h1 class="geninfo__name">
            {{name}}
        </h1>
        <div class="geninfo__box">
            <img v-if="image" :src="`${image}`" alt="" class="geninfo__img">
            <img v-else src="../assets/images/userPhoto.jpg" alt="" class="geninfo__img">
            <div>
                <div class="geninfo__createdat">
                    Дата регистрации:   {{date}}
                </div>
                <div class="geninfo__books">
                    Заказов:   0
                </div>
            </div>
        </div>
        <div class="geninfo__text">
            Добро пожаловать в панель управления. 
            Здесь вы можете <button @click="changePass" class="geninfo__btn">изменить свои регистрационные данные и cменить пароль.</button> 
            Зарегистрированные пользователи имеют доступ к <button @click="historyOrders" class="geninfo__btn">
            истории заказов</button> и возможность <button @click="likedProducts" class="geninfo__btn">
            добавлять в избранное товары для будущих покупок.
            </button>
        </div>
        <button @click="controlPanel" class="geninfo__control--panel">
            Панель управления
        </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            image : '',
            date : '',
            name : ''
        }
    },
    methods: {
        // changePass (){
        //     this.$router.push('/account/changepassword')
        // },
        // historyOrders(){
        //     this.$router.push('/account/purchasehistory')
        // },
        // likedProducts(){
        //     this.$router.push('/account/likedproducts')
        // },
        // controlPanel(){
        //     this.$router.push('/account/personaldata')
        // }
    },
    created(){
              
    },
    beforeCreate() {
        let userID = this.$cookies.get('eltechusers')
        let clearUserID = userID.slice(1, userID.length - 1)

        setTimeout(() => {
            axios.get(`https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users/${clearUserID}/personalData.json`)
            .then(res => {
                this.image = res.data.photo
            })
        }, 1500);

        setTimeout(() => {
            axios.get(`https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users/${clearUserID}/user.json`)
            .then(res => {
                this.date = res.data.createdAt
                this.name = res.data.name
            }) 
        }, 1500); 
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .geninfo {
        padding-left: 135px;
        color: $black;
        &__name {
            font-weight: 700;
            font-size: 28px;
            line-height: 120%;
            margin-bottom: 30px;
        }
        &__box {
            display: flex;
            align-items: center;
            gap: 30px;
            margin-bottom: 20px;
        }
        &__img {
            width: 100px;
            height: 100px;
        }
        &__createdat {
            font-weight: 400;
            font-size: 17px;
            line-height: 21px;
            margin-bottom: 10px;
        }
        &__books {
            font-weight: 400;
            font-size: 17px;
            line-height: 21px;
        }
        &__text {
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
        }
        &__btn {
            font-weight: 600;
            font-size: 16px;
            line-height: 130%;
            background: unset;
            border: none;
            color: $dark-blue;
            display: contents;
        }
        &__control--panel{
            margin-top: 20px;
            padding: 15px 80px;
            font-weight: 500;
            font-size: 16px;
            line-height: 100%;
            color: #FFFFFF;
            background: $dark-blue;
            border-radius: 5px;
            border: none;
        }
    }
</style>