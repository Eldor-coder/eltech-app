
const isActive = {
    state: () => ({
        categoryActive : false,
    }),
    getters: {
        categoryActive(state){
            return state.categoryActive
        }
    },
    mutations: {
        categoryActive(state,payload){
            state.categoryActive = payload
        }
    },
    actions: {
        categoryActive(context,payload){
            context.commit('categoryActive',payload)
        }
    }
  }
  
  export default isActive
  