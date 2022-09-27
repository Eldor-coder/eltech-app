<template>
  <div class="change">
        <label class="change__label" for="old-password">Введите старый пароль</label>
        <div class="change__pass">
            <img 
                :class="{'change__lock' : true, 'correct1' : correctCode, 'nocorrect3' : nocorrect1}"
                src="../assets/images/lock.svg" alt=""
            >
            <input 
                type="password" 
                name="password" 
                id="password1" 
                :class="{'change__input' : true, 'correct1' : correctCode, 'nocorrect1' : nocorrect1}"
                placeholder="Пароль"
                v-model="oldPassword"
            >
            <button @click.prevent="showPassword1" :class="{'change__eye--btn' : true, 'correct1' : correctCode, 'nocorrect4' : nocorrect1}">
                <svg :class="{'change__eye--svg' : true, 'fav' : fav1}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9201 11.6C19.9001 6.91 16.1001 4 12.0001 4C7.90007 4 4.10007 6.91 2.08007 11.6C2.025 11.7262 1.99658 11.8623 1.99658 12C1.99658 12.1377 2.025 12.2738 2.08007 12.4C4.10007 17.09 7.90007 20 12.0001 20C16.1001 20 19.9001 17.09 21.9201 12.4C21.9751 12.2738 22.0036 12.1377 22.0036 12C22.0036 11.8623 21.9751 11.7262 21.9201 11.6ZM12.0001 18C8.82007 18 5.83007 15.71 4.10007 12C5.83007 8.29 8.82007 6 12.0001 6C15.1801 6 18.1701 8.29 19.9001 12C18.1701 15.71 15.1801 18 12.0001 18ZM12.0001 8C11.2089 8 10.4356 8.2346 9.77779 8.67412C9.11999 9.11365 8.6073 9.73836 8.30455 10.4693C8.0018 11.2002 7.92258 12.0044 8.07693 12.7804C8.23127 13.5563 8.61223 14.269 9.17164 14.8284C9.73105 15.3878 10.4438 15.7688 11.2197 15.9231C11.9956 16.0775 12.7999 15.9983 13.5308 15.6955C14.2617 15.3928 14.8864 14.8801 15.3259 14.2223C15.7655 13.5645 16.0001 12.7911 16.0001 12C16.0001 10.9391 15.5786 9.92172 14.8285 9.17157C14.0783 8.42143 13.0609 8 12.0001 8ZM12.0001 14C11.6045 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3037 13.1308 10.1523 12.7654C10.0009 12.3999 9.96133 11.9978 10.0385 11.6098C10.1157 11.2219 10.3061 10.8655 10.5859 10.5858C10.8656 10.3061 11.2219 10.1156 11.6099 10.0384C11.9978 9.96126 12.4 10.0009 12.7654 10.1522C13.1309 10.3036 13.4432 10.56 13.663 10.8889C13.8828 11.2178 14.0001 11.6044 14.0001 12C14.0001 12.5304 13.7894 13.0391 13.4143 13.4142C13.0392 13.7893 12.5305 14 12.0001 14Z" fill="#838688"/>
                </svg>
            </button>
            <div class="correct" v-if="correctCode">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4377_5331)">
                    <circle cx="11.9998" cy="12.0018" r="9.00375" stroke="#22A44E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.44531 12.3407L10.6132 14.5086L10.5992 14.4946L15.4902 9.60352" stroke="#22A44E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4377_5331">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </div>

        <label class="change__label" for="old-password">Введите новый пароль</label>
        <div class="change__pass">
            <img 
                :class="{'change__lock' : true, 'correct1' : newCode, 'nocorrect3' : nocorrect2}"
                src="../assets/images/lock.svg" alt=""
            >
            <input 
                type="password" 
                name="password" 
                id="password2" 
                :class="{'change__input' : true, 'correct1' : newCode, 'nocorrect1' : nocorrect2}"
                placeholder="Пароль"
                v-model="newPassword"
            >
            <button @click.prevent="showPassword2" :class="{'change__eye--btn' : true, 'correct1' : newCode, 'nocorrect4' : nocorrect2}">
                <svg :class="{'change__eye--svg' : true, 'fav' : fav2}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9201 11.6C19.9001 6.91 16.1001 4 12.0001 4C7.90007 4 4.10007 6.91 2.08007 11.6C2.025 11.7262 1.99658 11.8623 1.99658 12C1.99658 12.1377 2.025 12.2738 2.08007 12.4C4.10007 17.09 7.90007 20 12.0001 20C16.1001 20 19.9001 17.09 21.9201 12.4C21.9751 12.2738 22.0036 12.1377 22.0036 12C22.0036 11.8623 21.9751 11.7262 21.9201 11.6ZM12.0001 18C8.82007 18 5.83007 15.71 4.10007 12C5.83007 8.29 8.82007 6 12.0001 6C15.1801 6 18.1701 8.29 19.9001 12C18.1701 15.71 15.1801 18 12.0001 18ZM12.0001 8C11.2089 8 10.4356 8.2346 9.77779 8.67412C9.11999 9.11365 8.6073 9.73836 8.30455 10.4693C8.0018 11.2002 7.92258 12.0044 8.07693 12.7804C8.23127 13.5563 8.61223 14.269 9.17164 14.8284C9.73105 15.3878 10.4438 15.7688 11.2197 15.9231C11.9956 16.0775 12.7999 15.9983 13.5308 15.6955C14.2617 15.3928 14.8864 14.8801 15.3259 14.2223C15.7655 13.5645 16.0001 12.7911 16.0001 12C16.0001 10.9391 15.5786 9.92172 14.8285 9.17157C14.0783 8.42143 13.0609 8 12.0001 8ZM12.0001 14C11.6045 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3037 13.1308 10.1523 12.7654C10.0009 12.3999 9.96133 11.9978 10.0385 11.6098C10.1157 11.2219 10.3061 10.8655 10.5859 10.5858C10.8656 10.3061 11.2219 10.1156 11.6099 10.0384C11.9978 9.96126 12.4 10.0009 12.7654 10.1522C13.1309 10.3036 13.4432 10.56 13.663 10.8889C13.8828 11.2178 14.0001 11.6044 14.0001 12C14.0001 12.5304 13.7894 13.0391 13.4143 13.4142C13.0392 13.7893 12.5305 14 12.0001 14Z" fill="#838688"/>
                </svg>
            </button>
            <div class="correct" v-if="newCode">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4377_5331)">
                    <circle cx="11.9998" cy="12.0018" r="9.00375" stroke="#22A44E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.44531 12.3407L10.6132 14.5086L10.5992 14.4946L15.4902 9.60352" stroke="#22A44E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4377_5331">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </div>

        <label class="change__label" for="old-password">Повторите новый пароль</label>
        <div class="change__pass">
            <img 
                :class="{'change__lock' : true, 'correct1' : newCode2, 'nocorrect3' : nocorrect3}"
                src="../assets/images/lock.svg" alt=""
            >
            <input 
                type="password" 
                name="password" 
                id="password3" 
                :class="{'change__input' : true, 'correct1' : newCode2, 'nocorrect1' : nocorrect3}"
                placeholder="Пароль"
                v-model="repeatPassword"
            >
            <button @click.prevent="showPassword3" :class="{'change__eye--btn' : true, 'correct1' : newCode2, 'nocorrect4' : nocorrect3}">
                <svg :class="{'change__eye--svg' : true, 'fav' : fav3}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9201 11.6C19.9001 6.91 16.1001 4 12.0001 4C7.90007 4 4.10007 6.91 2.08007 11.6C2.025 11.7262 1.99658 11.8623 1.99658 12C1.99658 12.1377 2.025 12.2738 2.08007 12.4C4.10007 17.09 7.90007 20 12.0001 20C16.1001 20 19.9001 17.09 21.9201 12.4C21.9751 12.2738 22.0036 12.1377 22.0036 12C22.0036 11.8623 21.9751 11.7262 21.9201 11.6ZM12.0001 18C8.82007 18 5.83007 15.71 4.10007 12C5.83007 8.29 8.82007 6 12.0001 6C15.1801 6 18.1701 8.29 19.9001 12C18.1701 15.71 15.1801 18 12.0001 18ZM12.0001 8C11.2089 8 10.4356 8.2346 9.77779 8.67412C9.11999 9.11365 8.6073 9.73836 8.30455 10.4693C8.0018 11.2002 7.92258 12.0044 8.07693 12.7804C8.23127 13.5563 8.61223 14.269 9.17164 14.8284C9.73105 15.3878 10.4438 15.7688 11.2197 15.9231C11.9956 16.0775 12.7999 15.9983 13.5308 15.6955C14.2617 15.3928 14.8864 14.8801 15.3259 14.2223C15.7655 13.5645 16.0001 12.7911 16.0001 12C16.0001 10.9391 15.5786 9.92172 14.8285 9.17157C14.0783 8.42143 13.0609 8 12.0001 8ZM12.0001 14C11.6045 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3037 13.1308 10.1523 12.7654C10.0009 12.3999 9.96133 11.9978 10.0385 11.6098C10.1157 11.2219 10.3061 10.8655 10.5859 10.5858C10.8656 10.3061 11.2219 10.1156 11.6099 10.0384C11.9978 9.96126 12.4 10.0009 12.7654 10.1522C13.1309 10.3036 13.4432 10.56 13.663 10.8889C13.8828 11.2178 14.0001 11.6044 14.0001 12C14.0001 12.5304 13.7894 13.0391 13.4143 13.4142C13.0392 13.7893 12.5305 14 12.0001 14Z" fill="#838688"/>
                </svg>
            </button>
            <div class="correct" v-if="newCode2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4377_5331)">
                    <circle cx="11.9998" cy="12.0018" r="9.00375" stroke="#22A44E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.44531 12.3407L10.6132 14.5086L10.5992 14.4946L15.4902 9.60352" stroke="#22A44E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4377_5331">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </div>

        <button @click="save" class="change__save--btn">
            Сохранить изменения
        </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            check2 : true,
            correctCode : false,
            nocorrect1 : false,
            newCode : false,
            nocorrect2 : false,
            newCode2 : false,
            nocorrect3 : false,
            fav1 : false,
            fav2 : false,
            fav3 : false,
            oldPassword : '',
            oldPassword1 : '',
            newPassword : '',
            repeatPassword : ''
        }
    },
    methods: {
        showPassword1() {
        let x = document.getElementById("password1");      
            if (x.type === "password") {
                x.type = "text";
                this.fav1 = true
            } else {
                x.type = "password";
                this.fav1 = false
            }
        },
        showPassword2() {
        let x = document.getElementById("password2");      
            if (x.type === "password") {
                x.type = "text";
                this.fav2 = true
            } else {
                x.type = "password";
                this.fav2 = false
            }
        },
        showPassword3() {
        let x = document.getElementById("password3");      
            if (x.type === "password") {
                x.type = "text";
                this.fav3 = true
            } else {
                x.type = "password";
                this.fav3 = false
            }
        },
        checkOldPassword(){
            if(this.oldPassword.length >= 8) {
                if(this.oldPassword == this.oldPassword1) {
                    this.correctCode = true
                    this.nocorrect1 = false
                    return true
                } else {
                    this.correctCode = false
                    this.nocorrect1 = true
                    return false
                    
                }
            } else{
                this.nocorrect1 = true
                this.correctCode = false
                return false
            }
        },
        createNewPassword(){
            if(this.newPassword.length >= 8) {
                this.nocorrect2 = false
                this.newCode = true
                return true
            } else if (this.newPassword.length < 8) {
                this.nocorrect2 = true
                this.newCode = false
                return false
                
            }
        },
        checkNewPassword(){
            if(this.repeatPassword.length >= 8) {
                if(this.newPassword == this.repeatPassword) {
                    this.newCode2 = true
                    this.nocorrect3 = false
                    return true
                } else {
                    this.newCode2 = false
                    this.nocorrect3 = true
                    return false
                }
            } else{
                this.nocorrect3 = true
                this.newCode2 = false
                return false
            }
        },
        save(){
            if(this.checkOldPassword()){
                if (this.createNewPassword()) {
                    if(this.checkNewPassword()) {
                        this.changePass()

                        this.$store.dispatch('setMsg', {
                            text : 'Ваш пароль был успешно изменен',
                            class : 'success'
                        })
                    } else {
                        this.$store.dispatch('setMsg', {
                            text : 'Вы неправильно ввели повторяющийся пароль',
                            class : 'warning'
                        })
                    }

                    
                } else {
                    this.$store.dispatch('setMsg', {
                        text : 'Пароль не должен быть меньше 8 символов',
                        class : 'warning'
                    })
                }
            } else {
                this.$store.dispatch('setMsg', {
                    text : 'Неверный пароль',
                    class : 'warning'
                })
            }
        },
        async changePass(){
            let userID = this.$cookies.get('eltechusers')
            let clearUserID = userID.slice(1, userID.length - 1)
            const response = await fetch(`https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users/${clearUserID}/user/password.json`, {
                method : 'PUT',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(this.repeatPassword)
            })
            const firebaseData = await response.json()
            console.log(firebaseData);
        }
    },
    created(){
        let userID = this.$cookies.get('eltechusers')
        let clearUserID = userID.slice(1, userID.length - 1)
        axios.get(`https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users/${clearUserID}/user.json`)
        .then(res => {
            this.oldPassword1 = res.data.password
        })   
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .change {
        padding-left: 135px;
        &__label,&__input{
            margin-bottom: 8px;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
        }
        &__input {
            padding: 16px 20px;
            border: 1px solid #EAEAF0;
            // border-radius: 5px;
            width: 300px;
            margin: 0;
            border-left: none;
            border-right: none;
            &.correct1 {
                border: 1px solid #22A44E;
                 border-left: none;
                border-right: none;
            }
            &.nocorrect1 {
                border: 1px solid $red;
                border-left: none;
                border-right: none;
            }
        }
        &__pass {
            margin-top: 8px;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            img {
                padding: 13px;
                background: #FFFFFF;
                border: 1px solid #EAEAF0;
                border-right: unset;
                &.correct1 {
                    border: 1px solid #22A44E;
                    border-right: unset;
                }
                &.nocorrect2 {
                    border: 1px solid $red;
                    border-right: unset;
                }
            }
            svg {
                background: #FFFFFF;
            }
            button {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
         &__lock {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border-right: none;
            transition: .3s;
            &.correct1 {
                border: 1px solid #22A44E;
                border-right: none;
            }
            &.nocorrect3 {
                border: 1px solid $red;
                border-right: none;
            }
        }
         &__eye {
            &--btn {
                background: unset;
                width: 40px;
                height: 52px;
                border: 1px solid #EAEAF0;
                border-radius: unset;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                border-left: unset;
                &.correct1 {
                    border: 1px solid #22A44E;
                    border-left: unset;
                }
                &.nocorrect4 {
                    border: 1px solid $red;
                    border-left: unset;
                }
                
            }
        
        
            &--svg {
                width: 25px;
                height: 25px;
                &.fav {
                    path { 
                        fill: #22A44E;
                    }
                }
            }
        }
        .correct {
            margin-left: 5px;
        }
        &__save {
            &--btn {
                margin-top: 28px;
                padding: 16px 115px;
                font-weight: 500;
                font-size: 16px;
                line-height: 100%;
                color: #FFFFFF;
                background: $dark-blue;
                border-radius: 5px;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>