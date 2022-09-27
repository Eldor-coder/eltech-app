import axios from 'axios'
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();

const liked = {
    state: () => ({
        URI : 'https://wt.altech.uz',
        likedProducts : [],
    }),
    getters : {
        getLikedProducts(state){
            return state.likedProducts
        }
    },
    mutations : {
        setLikedProducts(state,payload){
            state.likedProducts = payload
        },
        
    },
    actions : {
        setLikedProducts(context){
            if(cookies.isKey('elteshfavs')){
                let favs = JSON.parse(cookies.get('elteshfavs'))
                console.log(favs);
                axios.post(`${context.state.URI}/product/ids`, favs)
                .then(res => {
                    console.log('dsadsad',res.data);
                    context.commit('setLikedProducts', res.data)
                })
            }  
        },
        async setLikedProductss(context){
            if(cookies.isKey('elteshfavs')){
                let favs = JSON.parse(cookies.get('elteshfavs'))
                console.log(favs);
                const response = await fetch(`${context.state.URI}/product/ids`, {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify(favs)
                })
                
                const res = await response.json()
                console.log('dsadsad',res);
                context.commit('setLikedProducts', res)
            }  
        }
    }
}

export default liked