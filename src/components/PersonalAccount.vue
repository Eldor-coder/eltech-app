<template>
  <div class="account">
    <div class="container">
        <the-router :routerProps="{pageName1 : 'Личный кабинет', pageName2 : pageName, pageName3 : ''}"></the-router>
        <h1 class="account__title">{{pageName}}</h1>
        <div class="account__box">
            <div class="col-3">
                <ul class="account__list">
                    <li :class="{'account__item' : true, 'active': name === 'GeneralInformation'}">
                        <router-link to="/account/generalinfo" @click="change('GeneralInformation')" class="account__router">
                            Общие сведения
                        </router-link >
                    </li>
                    <li :class="{'account__item' : true, 'active': name === 'PersonalData'}">
                        <router-link to="/account/personaldata" @click="change('PersonalData')" :class="['account__router']">
                            Личные данные
                        </router-link >
                    </li>
                    <li :class="{'account__item' : true, 'active': name === 'PurchaseHistory'}">
                        <router-link to="/account/purchasehistory" @click="change('PurchaseHistory')" :class="['account__router']">
                            История покупок
                        </router-link >
                    </li>
                    <li :class="{'account__item' : true, 'active': name === 'LikedProductsComp'}">
                        <router-link to="/account/likedproducts" @click="change('LikedProductsComp')" :class="['account__router']">
                            Избранное
                         </router-link >
                    </li>
                    <li :class="{'account__item' : true, 'active': name === 'ChangePassword'}">
                        <router-link to="/account/changepassword" @click="change('ChangePassword')" :class="['account__router']">
                            Сменить пароль
                         </router-link >
                    </li>
                    <li class="account__item exit">
                        <button @click="openModal" class="account__router exit">
                            Выйти
                        </button>
                    </li>
                </ul>
            </div>
            <div class="col-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <div :class="{'modal': true, 'open' : modal}">
        <div class="exit__modal">
            <h3 class="exit__modal--title">
                Вы действительно хотите уйти?
            </h3>
            <div class="exit__modal--btns">
                <button @click="exit" class="exit__modal--btn">
                    Да
                </button>
                <button @click="closeModal" class="exit__modal--btn">
                    Нет
                </button>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();

export default {
    components : {
        
    },
    data() {
        return {
            name : 'GeneralInformation',
            pageName : 'Общие сведения',
            modal : false
        }
    },
    methods: {
        openModal(){
            this.modal = true
        },
        closeModal(){
            this.modal = false
        },
        exit(){
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            cookies.remove('eltechusers')    
            this.modal = false
            this.$store.dispatch('setCheck', true)
            this.$store.dispatch("setMsg", {
                text: "Ваша сессия закончена ! Авторизуйтесь заново",
                class: "warning",
            })
            this.$router.push('/')

        },
        change(val) {
            this.name = val
            if(this.name == 'GeneralInformation') {
                this.pageName = 'Общие сведения'
            } else if (this.name == 'PersonalData') {
                this.pageName = 'Личные данные'
            } else if (this.name == 'PurchaseHistory') {
                this.pageName = 'История покупок'
            } else if (this.name == 'ChangePassword') {
                this.pageName = 'Сменить пароль'
            } else if (this.name == 'LikedProductsComp') {
                this.pageName = 'Избранное'
            }
        },
        async checkUser(){
            if(this.$cookies.isKey('eltechusers')) {
            let userID = this.$cookies.get('eltechusers')
            const {data} =  await axios.get('https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users.json')
            let result = Object.keys(data).map(key => {
                return {
                    id : key,
                    ...data[key]
                }
            })
            
            let arrID = []
            result.forEach(res => {
                arrID.push(res.id)
            })

            if(arrID.includes(userID.slice(1,userID.length - 1))) {
                this.$store.dispatch('setCheck', false) 
            } else {
                this.$store.dispatch('setCheck', true)
                this.$store.dispatch("setMsg", {
                    text: "Ваша сессия закончена ! Авторизуйтесь заново",
                    class: "warning",
                })
                this.$router.push('/')
            }

            } else {
                this.$store.dispatch('setCheck', true)
                this.$store.dispatch("setMsg", {
                    text: "Ваша сессия закончена ! Авторизуйтесь заново",
                    class: "warning",
                });
                this.$router.push('/')
            }
        }
    },
    created(){
        this.$store.dispatch('setMore')
        this.$store.dispatch('setLikedProducts')
        this.$router.push('/account/generalinfo')
    },
     beforeCreate(){
        setTimeout(() => {
            this.checkUser()
        }, 3000);

        
        
  }
}
</script>

<style lang="scss" scoped>
    @import '../styles/Components/PersonalAccount';
</style>