import axios from "axios";
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();

const userStore = {
    state : {
        url : 'https://vue-eltech-userinfo-default-rtdb.firebaseio.com/users.json',
        URI : 'https://zoopay.5f.uz',
        user : {},
        authToggle : false,
        check : false,
    },
    getters : {
        getAuthToggle(state) {
            return state.authToggle
        },
        getCheck(state){
            return state.check
           }
    },
    mutations : {
        setCheck(state, payload){
            state.check = payload
        },
        setAuthToggle(state,payload){
            state.authToggle = payload
        }
    },
    actions : {
        setCheck(context,payload){
            context.commit('setCheck',payload)
        },
        reg(context,payload) {
            axios.post(`${context.state.url}/api/userreg/`, payload)
            .then(res => { 
                if(res.data.msg == 'ok') {
                    context.dispatch('setMsg', {
                        text : 'Успешно',
                        class : 'success'
                    })
                    cookies.set('zoouser', res.data.data)
                    context.commit('setAuthToggle', false)
                }
             }) 
        },
        checkUser(context){
            return  axios.get(`${context.state.url}`)
        },
        sms(context,payload) {
            axios.post(`${context.state.URI}/api/sms/`, payload)
            .then(res => { 
                console.log(res.data);
             })
        },
        login(context,payload) {
            axios.post(`${context.state.url}`, payload)
            .then(res => {
                if(res.data.msg == 'ok') {
                    context.dispatch('setMsg', {
                        text : 'Успешно',
                        class : 'success'
                    })
                    cookies.set('eltechuser', res.data.data)
                    context.commit('setAuthToggle', false)
                } else {
                    context.dispatch('setMsg', {
                        text : res.data.msg,
                        class : 'warning'
                    })
                }
            })
        },
        setAuthToggle(context,payload) {
            context.commit('setAuthToggle', payload)
        }
    }
}

export default userStore