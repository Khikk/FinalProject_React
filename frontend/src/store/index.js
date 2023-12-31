import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { productListReducer } from './productListReducer'
import { categoriesReducer } from './categoriesReducer'
import { productInfoReducer } from './productInfoReducer'
import cartReducer from './cartReducer'


const rootReducer = combineReducers({
    productList: productListReducer,
    categoriesList: categoriesReducer,
    productInfo: productInfoReducer,
    cart: cartReducer
})



export const store = createStore(rootReducer, applyMiddleware(thunk))