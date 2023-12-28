const defaultState = {}
const ABOUT_PRODUCT = 'ABOUT_PRODUCT'

export const productInfoReducer = (state = defaultState, action) => {
    switch(action.type){
        case ABOUT_PRODUCT:
            return action.payload[0]
        default:
            return state
    }
}

export const ProductInfoAction = (payload) => ({type: ABOUT_PRODUCT, payload})