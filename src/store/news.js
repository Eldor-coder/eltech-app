import axios from 'axios'

const news = {
    state: () => ({
        uri : 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b009869edab7421197ef0d9722fc3107',
        API_key : 'b009869edab7421197ef0d9722fc3107',
        news : [
            {
                author : '',
                title : '',
                description : '',
                urlToImage : '',
                publishedAt : '',
                content : ''
            }
        ],
        counter : null,
        SliderImages : [
            {
                path : 'slider-1.jpg',
                text : 'slider-1'
            },
            {
                path : 'slider-2.jpg',
                text : 'slider-2'
            },
            {
                path : 'slider-3.jpg',
                text : 'slider-3'
            },
          ],
        photos : []
    }),
    getters : {
        getNews(state){
            return state.news
        },
        getSliderImages(state) {
            return state.SliderImages
        },
        getCounter(state){
            return state.counter
        },
        getPhoto(state){
            return  state.photos
        }
    },
    mutations : {
        setNews(state,payload){
            state.news = payload
        },
        newsCounter(state,payload){
            state.counter = payload.length
        },
        setPhotos(state,payload){
            state.photos.push(payload)
        }
    },
    actions : {
        getNews(context,payload) {
            context.dispatch('setToggleLoading', true)
            axios.get(`${context.state.uri}`)
            .then(res => {
                if(payload){
                    context.commit('setNews',res.data.articles.slice((payload - 1) * 10, payload * 10))
                    context.dispatch('setToggleLoading', false)
                } else {
                    context.commit('setNews',res.data.articles)
                    context.commit('newsCounter',res.data)
                    context.dispatch('setToggleLoading', false)
                }
            })
        },
        nextNews(context,payload){
            context.dispatch('setToggleLoading', true)
            axios.get(`${context.state.uri}`)
            .then(res => {
                context.commit('setNews',res.data.slice(payload.a,payload.b))
                context.dispatch('setToggleLoading', false)
            })
        },
        photos(context,payload){
            context.commit('setPhotos',payload)
        }
    }
}

export default news