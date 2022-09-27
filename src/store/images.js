import axios from 'axios'

const images = {
    state: () => ({
        uri : 'https://jsonplaceholder.typicode.com/photos',
        photos : []
    }),
    getters : {
        getPhotos(state){
            return state.photos
        }
    },
    mutations : {
        setPhotos(state,payload){
            state.photos = payload
        }
    },
    actions : {
        getPhotos(context) {
            axios.get(`${context.state.uri}`)
            .then(res => {
                context.commit('setPhotos',res.data)
            })
        }
    }
}

export default images