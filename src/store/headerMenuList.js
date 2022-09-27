// import { createStore } from 'vuex'

const headerMenu = {
    state: () => ({
      list : [
          {
              path : 'about',
              text: 'О компании'
          },
          {
              path : 'stocks',
              text: 'Акции'
          },
          {
              path : 'installment',
              text: 'Рассрочка 0|0|18'
          },
          {
              path : 'services',
              text: 'Сервис и гарантия'
          },
          {
              path : 'dropshipping',
              text: 'Опт/дропшиппинг'
          },
          {
              path : 'contacts',
              text: 'Контакты'
          },
      ]
    }),
    getters: {
        getMenu(state) {
            return state.list
        }
    },
    mutations: {
    },
    actions: {
    }
  }
  
  export default headerMenu
  