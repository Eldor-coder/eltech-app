import axios from 'axios'

const getproducts = {
    state: () => ({
        URI : 'https://randomuser.me/api/?results=',
        userInfo : [],
        comments : [],
        num : null
    }),
    getters: {
        getUserInfo(state){
            return state.userInfo
        },
        getComments(state) {
            return state.comments.slice(0,100)
        },
        getNum(state){
            return state.num
        }
    },
    mutations: {
        setUserInfo(state,payload){
            state.userInfo = payload
        },
        setComments(state,payload) {
            state.comments = payload
        }
    },
    actions: {
        getUserInfo(context,payload) {
            axios.get(`${context.state.URI + payload}`)
            .then(res => {
                context.state.num = payload
                context.commit('setUserInfo', res.data)
            })
        },
        getComments(context){
            axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                context.commit('setComments', res.data)
            })
        }
    }
}

export default getproducts