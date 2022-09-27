import axios from 'axios'

const brends = {
    state: () => ({
        URI : 'https://wt.altech.uz',
        brands : [],
        brandProducts : []
    }),
    getters : {
        getBrands(state) {
            return state.brands
        },
        getBrandProducts(state) {
            return state.brandProducts
        }
    },
    mutations : {
        setBrands(state,payload) {
            state.brands = payload
        },
        setBrandProducts(state,payload) {
            state.brandProducts = payload
        }
    },
    actions : {
        setBrands(context) {
            axios.get(`${context.state.URI}/brend/api/allbrend`)
            .then(res => {
                context.commit('setBrands', res.data)
            })
        },
        setBrandProducts(context,payload) {
            axios.get(`${context.state.URI}/brend/get/${payload}`)
            .then(res => {
                context.commit('setBrandProducts', res.data)
            })
        }
    }
}

export default brends