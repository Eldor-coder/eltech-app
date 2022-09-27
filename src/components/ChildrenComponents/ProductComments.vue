<template>
  <div class="container">
    <div v-if="getUserInfo.length !== 0" class="comments col-7">
        <h1 class="comments__title">
            Отзывы {{product.title}}
        </h1>
        <div class="comments__body">
            <div class="comment__box">
                <ul class="comment__list">
                    <li class="comment__item" v-for="(user,index) of getUserInfo" :key="index">
                        <div class="comment__box--top" >
                            <div class="user__photo">
                                <img class="user__img" :src="user.picture.medium" alt="">
                            </div>
                            <h3 class="user__name">
                                {{user.name.first}} {{user.name.last}}
                            </h3>
                            <span class="comment__date">
                                17 iyun 2022
                            </span>
                            <div class="comment__rate">
                                <img src="../../assets/images/star.svg" alt="star" class="comment__star">
                                <img src="../../assets/images/star.svg" alt="star" class="comment__star">
                                <img src="../../assets/images/star.svg" alt="star" class="comment__star">
                                <img src="../../assets/images/star.svg" alt="star" class="comment__star">
                                <img src="../../assets/images/star(white).svg" alt="star" class="comment__star">
                            </div>
                            <p class="comment__rate--text">
                                (4 из 5)
                            </p>
                        </div>
                        <div class="comment__box--bottom">
                            <p class="user__comment">
                                {{comments[index].body}}
                            </p>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
    <div v-else class="comments col-7">
        <h1 class="comments__title">
            Пока нет отзывы
        </h1>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            min : 1,
            max : 11,
            num : null
        }
    },
    methods: {
        
    },
    computed : {
        product(){
            return this.$store.getters.getOneProduct
        },
        getUserInfo(){
            return this.$store.getters.getUserInfo.results
        },
        comments(){
            return this.$store.getters.getComments.slice(0,this.num)
        },
        
    },
    created(){
        this.num = this.$store.getters.getNum
        // this.num = Math.floor(Math.random() * this.max);
        // this.$store.dispatch('getUserInfo', this.num)
        // this.$store.dispatch('getComments')
    }
}
</script>

<style lang="scss" scoped>
    @import '../../styles/var.scss';
    .comments {
        padding: 0px 20px;
        color: $black;
        overflow: auto;
        max-height: 500px;
        scrollbar-color: #838688 #EDF2F6;
        scrollbar-width: thin;
        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-track {
            background-color: #EDF2F6;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }
        &__title {
            font-weight: 700;
            font-size: 28px;
            line-height: 120%;
            margin-bottom: 30px;
        }
    }
    .user {
        &__photo {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #C8CACB;
            overflow: hidden;
        }
        &__img {
            width: 50px;
            height: 50px;
            
        }
        &__name {
            font-weight: 700;
            font-size: 16px;
            line-height: 120%;
            color: $black;
        }
        &__comment {
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: $black;
        }
    }
    .comment {
        &__item {
            margin-bottom: 15px;
            padding: 40px;
            background: #EDF2F6;
            border-radius: 10px;
        }
        &__box {
            
            &--top {
                display: flex;
                align-items: center;
                gap: 15px;
            }
            &--bottom {
                margin-top: 20px;
            }
        }
        &__rate {
            &--text {
                font-weight: 700;
                font-size: 16px;
                line-height: 100%;
                color: $grey;
            }
        }
        &__star {

        }
        &__date {
            font-weight: 700;
            font-size: 16px;
            line-height: 100%;
            color: $grey;
        }
    }
</style>