<template>
  <div class="container">
    <div class="btn__box">
        <button class="btn number" @click="active($event)">
            {{i}}
        </button>
    </div>
  </div>
</template>

<script>
export default {
    props : ['i'],
    emits : ['nextNews'],
    methods: {
        active(e){
            let oldActive = document.getElementsByClassName("number-active");
            for (let i = 0; i < oldActive.length; i++) {
                oldActive[i].classList.remove("number-active");
            }
            e.target.classList.add("number-active");
            this.$emit('nextNews',(e.target.textContent))
        },
    },
    created() {
        
  
    },
    computed : {
        numberBtns(){
            
            return document.getElementsByClassName("number");
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 48px;
        height: 48px;
        background: #FFFFFF;
        border: 1px solid #EAEAF0;
        border-radius: 4px;
    }
    .number-active {
        background: #4878A6;
        color: #FFFFFF;
    }
</style>