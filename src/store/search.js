import axios from "axios";

const search = {
    state : {
        URI : 'https://wt.altech.uz',
        results : [],
        showBig : false
    },
    getters : {
        getResults(state){
            return state.results 
        },
        close(state){
            return state.showBig 
        }
    },
    mutations : {
        getResults(state,payload){
            state.results = payload
        },
        setClose(state,payload){
            state.showBig = payload
        }
    },
    actions : {
        getResults(context,payload){
            axios.get(`${context.state.URI}/product/search/${payload}`)
            .then(res => {
                if(res.data !== 'error') {
                    context.commit('getResults', res.data)
                } else {
                    context.commit('getResults', [])
                }
            })
        },
        clear(context){
            context.commit('getResults', [])
        },
        setClose(context,payload){
            context.commit('setClose', payload)
        }
    }
}

export default search