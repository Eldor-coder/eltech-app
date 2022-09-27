<template>
    <div class="container">
        <div class="pagination">
            <vue-awesome-paginate
                :total-items="newsLength"
                :items-per-page="10"
                :max-pages-shown="10"
                :current-page="1"
                :on-click="onClickHandler"
            />
        </div>
    </div>
</template>

<script>
   export default {
    data() {
      return {
        newsLength : null
      }
    },
    methods: {
        onClickHandler(number){
            this.$store.dispatch('getNews', number)
        }
    },
    computed : {
      
    },
    created(){
      this.newsLength = this.$store.getters.getNews.length 
    }
   }
  
</script>

<style lang="scss">
    @import "vue-awesome-paginate/dist/style.css";
    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
    }
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 48px;
    width: 48px;
    border-radius: 4px;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #EAEAF0;
    color: #838688;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #4878A6;
    border: 1px solid #4878A6;
    color: white;
  }
  .active-page:hover {
    background-color: #4878A6;
  }
</style>