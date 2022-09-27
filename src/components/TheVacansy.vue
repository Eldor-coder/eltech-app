<template>
  <div class="container">
    <the-router :routerProps="{pageName1 : 'Вакансии', pageName2 : '', pageName3 : ''}"></the-router>
    <div class="vacansy">
        <h1 class="vacansy__title">
            Вакансии
        </h1>
        <div class="vacansy__body">
            <div class="vacansy__left col-7">
                <div class="vacansy__box">
                    <ul class="vacansy__list accordion">
                        <li v-for="(vacan,index) of vacansy" :key="index" class="vacansy__item contentBx">
                            <div class="vacansy__label label">
                                <div class="vacansy__btitle">
                                    {{vacan.jobName}}
                                </div>                                <!-- <button  class="purchase__btn"> -->
                                    <!-- <img src="../assets/images/arrow.svg" alt=""> -->
                                <svg @click="showAccordion($event)" class="vacansy__btn--svg" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="vacansy__btn--path" d="M6.79171 10.1891C6.6337 10.3575 6.3663 10.3575 6.20829 10.1891L1.50288 5.17368C1.26324 4.91825 1.44435 4.5 1.7946 4.5L11.2054 4.5C11.5557 4.5 11.7368 4.91825 11.4971 5.17368L6.79171 10.1891Z" fill="#070C11"/>
                                </svg>
                                <!-- </button> -->
                            </div>
                            <div class="content">
                                <div class="content__element">
                                    <div class="content__box">
                                        <h3 class="content__title">
                                           {{vacan.lookingForTitle}}
                                        </h3>
                                        <ul class="content__list">
                                            <li v-for="(lookFor, index) of vacan.lookingFor" :key="index" class="content__item">
                                                {{lookFor}}
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="content__box">
                                        <h3 class="content__title">
                                           {{vacan.requirementsTitle}}
                                        </h3>
                                        <ul class="content__list">
                                            <li v-for="(requier, index) of vacan.requirements" :key="index" class="content__item">
                                                {{requier}}
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="content__box ">
                                        <h3 class="content__title">
                                           {{vacan.termsTitle}}
                                        </h3>
                                        <ul class="content__list">
                                            <li v-for="(term, index) of vacan.terms" :key="index" class="content__item">
                                                {{term}}
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </div>        
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="vacansy__right col-4">
                <div class="resume__box">
                    <h3 class="resume__title">
                        Присоединяйся к команде
                    </h3>
                    <label for="" class="resume__label">
                        Имя
                    </label>
                    <input type="text" class="resume__input" placeholder="Введите имя">
                    <label for="" class="resume__label">
                        Фамилия
                    </label>
                    <input type="text" class="resume__input" placeholder="Введите фамилию">
                    <label for="" class="resume__label">
                        Отчество
                    </label>
                    <input type="text" class="resume__input" placeholder="Введите отчество">
                    <label for="" class="resume__label">
                        Телефон
                    </label>
                    <input type="text" class="resume__input" placeholder="Введите номер телефон">
                    <label for="" class="resume__label">
                        Добавьте файл резюме
                    </label>
                    <input type="file" class="resume__input file" placeholder="Введите номер телефон">
                    <span class="resume__span">
                        Форматы файлов: .pdf, .doc, .docx
                    </span>
                    <label for="" class="resume__label">
                        Сопроводительное письмо
                    </label>
                    <textarea name="" id="" cols="10" rows="5" class="resume__textarea" placeholder="Введите сообщение"></textarea>
                    <button class="resume__btn">
                        Отправить
                    </button>
                    <div class="resume__confirm">
                        <input type="checkbox" class="resume__checkbox">
                        <label for="" class="resume__label con">
                            Отправляя данную форму вы соглашаетесь с политикой конфиденциальности
                        </label>
                    </div>
                    <h3 class="resume__title">
                        Номер отдела кадров
                    </h3>
                    <a href="+7 (996) 067-00-96" class="resume__tel">+7 (996) 067-00-96</a>
                </div>
                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TheRouter from '@/components/TheRouter'
export default {
    components : {
        TheRouter
    },
    data() {
        return {
            
        }
    },
    methods: {
        showAccordion(e){
            if(e.target.classList == 'vacansy__btn--svg') {
                e.target.parentElement.parentElement.classList.toggle('active')
                e.target.classList.toggle('active') 
            } else if (e.target.classList == 'vacansy__btn--path') {
                e.target.parentElement.parentElement.parentElement.classList.toggle('active')
                e.target.parentElement.classList.toggle('active') 
            }
                       
        },
    },
    computed : {
        vacansy(){
            return this.$store.getters.getVacansy
        }
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
    @import '../styles/Components/TheVacansy'
</style>