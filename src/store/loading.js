const loading = {
    state: () => ({
        toggleLoading : false
    }),
    getters : {
        getToggleLoading(state) {
            return state.toggleLoading
        }
    },
    mutations : {
        setToggleLoading(state,payload) {
            state.toggleLoading = payload
        }
    }, 
    actions : {
        setToggleLoading(context,payload) {
            context.commit('setToggleLoading', payload)
        }
    }
}

export default loading