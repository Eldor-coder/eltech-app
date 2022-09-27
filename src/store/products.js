import axios from 'axios'
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();

const getproducts = {
    state: () => ({
        URI : 'https://wt.altech.uz',
        allproducts : [],
        i : 0,
        subcatproducts : [],
        obj : {
            others : [],
            product : {
                title : '',
                photos : []
            }
        },
        component : '',
        pageName : '',
        productsAll : [],
        more : true
    }),
    getters: {
        getUri(state){
            return state.URI
        },
        getProducts(state){
            return state.allproducts
        },
        getsubcatproducts(state){
            return state.subcatproducts
        },
        getOneProduct(state){
            return state.obj.product
        },
        getOthers(state){
            return state.obj.others
        },
        getPageName(state){
            return state.pageName
        },
        getAllProducts(state) {
            return state.productsAll
        },
        getMore(state){
            return state.more
        }
    },
    mutations: {
        setMore(state, payload){
            state.more = payload
        },
        addBtn(state,payload){
            state.i = payload
        },
        setsubcatproducts(state,payload){
            if(cookies.isKey('elteshfavs')){
                let favs = JSON.parse(cookies.get('elteshfavs'))
                payload = payload.map(ads => {
                    ads.fav = favs.includes(ads._id)
                    return ads
                })
            }  
            state.subcatproducts = payload
        },
        getProducts(state,payload){
            if(cookies.isKey('elteshfavs')){
                let favs = JSON.parse(cookies.get('elteshfavs'))
                payload.forEach(product => {
                    payload.products = product.products.map(pro => {
                        pro.fav = favs.includes(pro._id)
                        return pro
                    });
                });
            }   
            state.allproducts = payload
        },
        getOneProduct(state,payload){
               
            state.oneProduct = payload
        },
        changeComponent(state,payload) {
            state.component = payload
        },
        setAds(state,payload){
            if(cookies.isKey('elteshfavs')){
                let favs = JSON.parse(cookies.get('elteshfavs'))
                payload.product.fav = favs.includes(payload.product._id)
            }
            state.obj = payload
        },
        setPageName(state,payload){
            state.pageName = payload
        },
        setFav(state, payload) {
            state.allproducts.forEach(product => {
                product.products.forEach(pro => {
                    if(pro._id == payload.id) {
                        pro.fav = payload.fav
                    }
                });
            });
        },
        setAllProducts(state, payload) {
            state.productsAll.push(payload)
        }
        
    },
    actions: {
        getFavAds(context, payload){
            axios.post(`${context.state.uri}/product/api/bycats/`, {favs: payload})
            .then(res => {
                if(res.data !== 'error'){
                    context.commit('getProducts',res.data)
                }
            })
        },
        setFav(context, payload) {
            context.commit('setFav', payload)
        },
        addBtn(context,payload){
            context.commit('addBtn',payload)
        },
        getSubCatProducts(context,payload) {
            context.dispatch('setToggleLoading', true)
            axios.get(`${context.state.URI}/product/api/bycats/${payload}`)
            .then(res => {
                    context.commit('setsubcatproducts',res.data)
                    context.commit('setPageName',res.data[0].subcategory.title)
                    context.dispatch('setToggleLoading', false)
            })
        },
        getAds(context,payload){
            context.dispatch('setToggleLoading', true)
            axios.get(`${context.state.URI}/product/view/${payload}`)
            .then(res => {
                context.commit('setAds',res.data)
                context.dispatch('setToggleLoading', false)
            })
        },
        changeComponent(context,payload) {
            context.commit('changeComponent', payload)
        },
        setMore(context) {
            context.commit('setMore', false)
        },
        getProducts(context, payload){
            context.commit('setMore', false)
            context.dispatch('setToggleLoading', true)
            axios.get(`${context.state.URI}/subcategory/api/forhome/${payload}`)
            .then(res => {
                if(payload == 0) {
                    context.commit('getProducts', [])
                }
                if(res.data.length > 0) { 
                    context.commit('getProducts', [...context.state.allproducts,...res.data])
                    context.commit('setMore', true)
                    context.dispatch('setToggleLoading', false)
                } else {
                    context.commit('setMore', false)
                }
            })

        },
    }
}

export default getproducts