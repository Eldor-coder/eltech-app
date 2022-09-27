<template>
  <div :class="{'auth': true, 'open' : toggle}">
        <div v-if="type == 1" :class="{'auth__box': true, 'open' : toggle}">
            <div class="auth__box--top">
                <h2 class="auth__title">
                    Вход
                </h2>
                <button  @click="$store.dispatch('setAuthToggle', false)" class="auth__close" ></button>
            </div>
            <div class="auth__box--bottom">
                <form name="auth" class="auth__form" @submit.prevent="login">
                    <label class="auth__label" for="phone">Телефон</label>
                    <input
                        v-maska="'+998(##) ###-##-##'"
                        class="auth__input"
                        v-model="userLogin.phone"
                        placeholder="+998 (__) ___ __ __"
                    />
                    <label class="auth__label" for="password">Пароль</label>
                    <div class="auth__password">
                        <img class="auth__lock" src="../../assets/images/lock.svg" alt="">
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            class="auth__input" 
                            placeholder="Пароль"
                            v-model="userLogin.password"
                        >
                        <button @click.prevent="showPassword" :class="{'auth__eye--btn' : true, 'full' : !check2}">
                            <svg :class="{'auth__eye--svg' : true, 'fav' : fav}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.9201 11.6C19.9001 6.91 16.1001 4 12.0001 4C7.90007 4 4.10007 6.91 2.08007 11.6C2.025 11.7262 1.99658 11.8623 1.99658 12C1.99658 12.1377 2.025 12.2738 2.08007 12.4C4.10007 17.09 7.90007 20 12.0001 20C16.1001 20 19.9001 17.09 21.9201 12.4C21.9751 12.2738 22.0036 12.1377 22.0036 12C22.0036 11.8623 21.9751 11.7262 21.9201 11.6ZM12.0001 18C8.82007 18 5.83007 15.71 4.10007 12C5.83007 8.29 8.82007 6 12.0001 6C15.1801 6 18.1701 8.29 19.9001 12C18.1701 15.71 15.1801 18 12.0001 18ZM12.0001 8C11.2089 8 10.4356 8.2346 9.77779 8.67412C9.11999 9.11365 8.6073 9.73836 8.30455 10.4693C8.0018 11.2002 7.92258 12.0044 8.07693 12.7804C8.23127 13.5563 8.61223 14.269 9.17164 14.8284C9.73105 15.3878 10.4438 15.7688 11.2197 15.9231C11.9956 16.0775 12.7999 15.9983 13.5308 15.6955C14.2617 15.3928 14.8864 14.8801 15.3259 14.2223C15.7655 13.5645 16.0001 12.7911 16.0001 12C16.0001 10.9391 15.5786 9.92172 14.8285 9.17157C14.0783 8.42143 13.0609 8 12.0001 8ZM12.0001 14C11.6045 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3037 13.1308 10.1523 12.7654C10.0009 12.3999 9.96133 11.9978 10.0385 11.6098C10.1157 11.2219 10.3061 10.8655 10.5859 10.5858C10.8656 10.3061 11.2219 10.1156 11.6099 10.0384C11.9978 9.96126 12.4 10.0009 12.7654 10.1522C13.1309 10.3036 13.4432 10.56 13.663 10.8889C13.8828 11.2178 14.0001 11.6044 14.0001 12C14.0001 12.5304 13.7894 13.0391 13.4143 13.4142C13.0392 13.7893 12.5305 14 12.0001 14Z" fill="#838688"/>
                            </svg>
                        </button>
                    </div>
                    <button class="auth__link">Забыли пароль?</button>
                    <button class="auth__btn">Отправить</button>
                </form>
                <button @click="type = 2" class="auth__link center">Зарегистрироваться</button>
            </div>
        </div>
        <div v-if="type == 2" :class="{'auth__box': true, 'open' : toggle}">
            <div class="auth__box--top">
                <h2 class="auth__title">
                    Регистрация
                </h2>
                <button @click="type = 1, $store.dispatch('setAuthToggle', false), toggleCode = true" class="auth__close" ></button>
            </div>
            <div class="auth__box--bottom">
                <form name="auth" class="auth__form" v-if="toggleCode">
                    <label  class="auth__label" for="name">Имя</label>
                    <input @input="checkName" v-model="userReg.name" type="text" :class="{'auth__input' : true, 'full' : !check1}" id="name">
                    <label class="auth__label" for="phone">Телефон</label>
                    <input @input="checkUser"  v-model="userReg.phone" v-maska="'+998(##) ###-##-##'" :class="{'auth__input' : true, 'full' : !check3}" id="phone" placeholder="+998 (__) ___ __ __">
                    <label class="auth__label" for="password">Придумайте пароль</label>
                    <div class="auth__password">
                        <img :class="{'auth__lock' : true, 'full' : !check2}" src="../../assets/images/lock.svg" alt="">
                        <input @input="checkPassword" v-model="userReg.password"  type="password" name="password" id="password" :class="{'auth__input pass' : true, 'full' : !check2}" placeholder="Пароль">
                        <button @click.prevent="showPassword" :class="{'auth__eye--btn' : true, 'full' : !check2}">
                            <svg :class="{'auth__eye--svg' : true, 'fav' : fav}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.9201 11.6C19.9001 6.91 16.1001 4 12.0001 4C7.90007 4 4.10007 6.91 2.08007 11.6C2.025 11.7262 1.99658 11.8623 1.99658 12C1.99658 12.1377 2.025 12.2738 2.08007 12.4C4.10007 17.09 7.90007 20 12.0001 20C16.1001 20 19.9001 17.09 21.9201 12.4C21.9751 12.2738 22.0036 12.1377 22.0036 12C22.0036 11.8623 21.9751 11.7262 21.9201 11.6ZM12.0001 18C8.82007 18 5.83007 15.71 4.10007 12C5.83007 8.29 8.82007 6 12.0001 6C15.1801 6 18.1701 8.29 19.9001 12C18.1701 15.71 15.1801 18 12.0001 18ZM12.0001 8C11.2089 8 10.4356 8.2346 9.77779 8.67412C9.11999 9.11365 8.6073 9.73836 8.30455 10.4693C8.0018 11.2002 7.92258 12.0044 8.07693 12.7804C8.23127 13.5563 8.61223 14.269 9.17164 14.8284C9.73105 15.3878 10.4438 15.7688 11.2197 15.9231C11.9956 16.0775 12.7999 15.9983 13.5308 15.6955C14.2617 15.3928 14.8864 14.8801 15.3259 14.2223C15.7655 13.5645 16.0001 12.7911 16.0001 12C16.0001 10.9391 15.5786 9.92172 14.8285 9.17157C14.0783 8.42143 13.0609 8 12.0001 8ZM12.0001 14C11.6045 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3037 13.1308 10.1523 12.7654C10.0009 12.3999 9.96133 11.9978 10.0385 11.6098C10.1157 11.2219 10.3061 10.8655 10.5859 10.5858C10.8656 10.3061 11.2219 10.1156 11.6099 10.0384C11.9978 9.96126 12.4 10.0009 12.7654 10.1522C13.1309 10.3036 13.4432 10.56 13.663 10.8889C13.8828 11.2178 14.0001 11.6044 14.0001 12C14.0001 12.5304 13.7894 13.0391 13.4143 13.4142C13.0392 13.7893 12.5305 14 12.0001 14Z" fill="#838688"/>
                            </svg>
                        </button>
                    </div>
                    <p class="auth__text">
                        Регистрируясь, вы соглашаетесь <br> 
                        с <button class="auth__route" @click="toAbout">пользовательским соглашением</button>
                    </p>
                    <button 
                         @click.prevent="registr"
                        class="auth__btn"
                        :disabled="(checkPhone || check1 || check2 || check3)"
                        :style="{
                            cursor: checkPhone || check1 || check2 || check3 ? 'not-allowed' : 'pointer',
                            opacity: checkPhone || check1 || check2 || check3 ? 0.4 : 1,
                        }"
                    >
                        Отправить
                    </button>
                    <button @click="type = 1" class="auth__link center">Я уже зарегистрирован</button>
                    
                </form>
                <form name="auth" class="auth__form" v-else>
                    <label class="auth__label" for="code">Введите присланный код</label>
                    <input 
                        v-model="userCode"
                        @input="checkCode"
                        type="number"
                        name="userCode"
                        class="auth__input"
                        placeholder="Код"
                    >
                    
                    <button 
                        @click="startreg"
                        class="auth__btn mt-2"
                        :disabled="disable"
                        :style="{
                            cursor: disable ? 'not-allowed' : 'pointer',
                            opacity: disable ? 0.4 : 1,
                        }"
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            fav : false,
            checker : true,
            checkPhone: false,
            userCode : '',
            toggleCode: true,
            type : 1,
            userLogin : {
                phone : '+998',
                password : ''
            },
            userReg : {
                name : '',
                phone : '+998',
                password : ''
            },
            currentDate : null,
            disable: true,
            check1 : true,
            check2 : true,
            check3 : true,
            users : []
        }
    },
    methods: {
        showPassword() {
        let x = document.getElementById("password");
            if (x.type === "password") {
                x.type = "text";
                this.fav = true
            } else {
                x.type = "password";
                this.fav = false
            }
        },
        toString(val){
            return val.toString()
        },
        checkName(){
            if(this.userReg.name.length >= 5) {
                this.check1 = false
                return true
            } else{
                this.check1 = true
                return false
            }
        },
        checkPassword(){
            if(this.userReg.password.length >= 8) {
                this.check2 = false
            } else{
                this.check2 = true
            }
        },
        startreg(e) {
            e.preventDefault();
            this.createDate()
            this.createPerson();
            this.userReg.name = ''
            this.userReg.phone = ''
            this.userReg.password = ''
            this.userCode = ''
            this.$store.dispatch('setAuthToggle', false)
            this.$store.dispatch('setCheck', false)
            this.type = 1;
            this.$store.dispatch('setMsg', {
                text : 'Вы успешно зарегистрировались!',
                class : 'success'
            })
            this.toggleCode = true;
            this.$router.push('/account')
        },
        createDate(){
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            // This arrangement can be altered based on how we want the date's format to appear.
            this.currentDate = `${day}-${month}-${year}`;
            // "17-6-2022"
        },
        async createPerson() {

            let user = {
                name : this.userReg.name,
                phoneNumber : '+' + this.cleanPhone(this.userReg.phone),
                password : this.userReg.password,
                createdAt : this.currentDate
            }

            const response = await fetch('https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users.json', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({user})
            })
            const firebaseData = await response.json()
            let id = firebaseData.name
            this.$cookies.set('eltechusers', JSON.stringify(id))
        },
        checkCode() {
            if (this.code == this.userCode) {
                this.disable = false;
            } else {
                this.disable = true;
                if(this.userCode.toString().length == 4) {
                    this.$store.dispatch('setMsg', {
                    text : 'Вы ввели неверный код!',
                    class : 'warning'
                })
                }
            }
        },
        registr(e) {
            if(this.checkName) {
                e.preventDefault();
                this.code = Math.floor(1000 + Math.random() * 9000);
                this.code = this.code.toString();
                this.$store.dispatch("sms", {
                    nums: this.code,
                    phone: this.cleanPhone(this.userReg.phone),
                });
                this.toggleCode = false;
                this.getUsers()
            } else {
                this.$store.dispatch("setMsg", {
                    text: "Имя должно быть не менее 5 символов",
                    class: "warning",
                });
            }
            
        },
        cleanPhone(val) {
            return val
                .split("+")
                .join("")
                .split(" ")
                .join("")
                .split(")")
                .join("")
                .split("(")
                .join("")
                .split("-")
                .join("");
        },
        async getUsers(){
            const {data} = await axios.get('https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users.json')
            let result = Object.keys(data).map(key => {
                return {
                    id : key,
                    ...data[key]
                }
            })
            this.users = result
            console.log(this.users);
        },
        async checkUser() {
            if(this.cleanPhone(this.userReg.phone).length == 12) {
                this.check3 = false
            } else{
                this.check3 = true
            }

            let phone = this.cleanPhone(this.userReg.phone);
            const {data} = await axios.get('https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users.json')
            let result = Object.keys(data).map(key => {
                return {
                    id : key,
                    ...data[key]
                }
            })
            result.forEach(res => {
                if(phone == res.user.phoneNumber.slice(1,res.user.phoneNumber.length)){
                    this.$store.dispatch("setMsg", {
                        text: "пользователь с таким номером уже существует",
                        class: "warning",
                    });
                    this.checkPhone = true;
                } else {
                    this.checkPhone = false;
                }
            })
            
            
        },
        async login(){
            let phone = this.cleanPhone(this.userLogin.phone);
            let password = this.userLogin.password
            const {data} = await axios.get('https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users.json')
            let result = Object.keys(data).map(key => {
                return {
                    id : key,
                    ...data[key]
                }
            })
            result.forEach(res => {
                if(phone == res.user.phoneNumber.slice(1,res.user.phoneNumber.length) && 
                password == res.user.password){
                    this.$cookies.set('eltechusers', JSON.stringify(res.id))
                    this.$store.dispatch('setAuthToggle', false)
                    this.$store.dispatch("setMsg", {
                        text: "Вы успешно прошли авторизацию",
                        class: "success",
                    });
                    this.$router.push('/account')
                } else { 
                    if(phone !== res.user.phoneNumber.slice(1,res.user.phoneNumber.length) && 
                        password == res.user.password) {
                        this.$store.dispatch("setMsg", {
                            text: "Такого номера не обнаружено",
                            class: "warning",
                        });
                    } else if (phone == res.user.phoneNumber.slice(1,res.user.phoneNumber.length) && 
                                password !== res.user.password) {
                        this.$store.dispatch("setMsg", {
                            text: "Вы ввели неправильный пароль!",
                            class: "warning",
                        });
                    }
                    
                }
            })
        },
        toAbout (){
            this.$router.push('/about')
            this.$store.dispatch('setAuthToggle', false)
        }
    },
    computed : {
        toggle() {
            return this.$store.getters.getAuthToggle;
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '../../styles/Components/AuthComponent';
</style>