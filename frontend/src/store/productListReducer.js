

const defaultState = {
    category_name: '',
    productList: []
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const SALES_PRODUCTS = 'SALES_PRODUCTS'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'
const SALE_SORT = 'SALE_SORT'
const SORT_FROM_PRICE = 'SORT_FROM_PRICE'
const SORT_TO_PRICE = 'SORT_TO_PRICE'
const SORT_NAME = 'SORT_NAME'
const DEFAULT_SORT = 'DEFAULT_SORT'

function addProp(array){
  return array.map((elem) => {
          elem.isShowSale = true
          elem.isShowPrice = true
          return elem
        })}

export const productListReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ALL_PRODUCTS:
      return {category_name: 'All products', productList: addProp(action.payload)};
    case PRODUCTS_BY_CATEGORY:
      return {category_name: action.payload.category.title, productList: addProp(action.payload.data)};
    case SALES_PRODUCTS:
      const all_sales_products = action.payload.filter(elem => elem.discont_price)
      return {category_name: 'Discounted items', productList: addProp(all_sales_products)}

      case SALE_SORT:
        return {
            ...state,
            productList: state.productList.map((elem) => {
              if (action.payload) {
                elem.isShowSale = elem.discont_price ? true : false
              } else {
                elem.isShowSale = true
              }
              return elem
            })}
    case SORT_TO_PRICE:
        const { max, min } = action.payload
        return {
            ...state,
            productList: state.productList.map((elem) => {
            elem.isShowPrice = !(elem.price >= min && elem.price <= max) ? false : true
            return elem
    })}
    case SORT_FROM_PRICE:
        const sortedByPrice = state.productList.slice().sort((a, b) => a.price - b.price)
        return {...state, productList: sortedByPrice}
    case SORT_NAME:
        const sortedByName = [...state.productList].sort((a, b) => a.title[0] < b.title[0] ? -1 : 1)
        return { ...state, productList: sortedByName }
    case DEFAULT_SORT:
        const sortedDefault = state.productList.slice().sort((a, b) => a.id - b.id)
        return { ...state, productList: sortedDefault }
    default: 
        return state
}
}

export const AllProductsAction = (payload) => ({type: ALL_PRODUCTS, payload})
export const ProductsByCategoryAction = (payload) => ({type: PRODUCTS_BY_CATEGORY, payload})
export const AllProductsOnSaleAction = (payload) => ({type: SALES_PRODUCTS, payload})

export const sortSaleAction = (payload) => ({type: SALE_SORT, payload})
export const sortToPriceAction = (payload) => ({type: SORT_TO_PRICE, payload})
export const sortFromPriceAction = () => ({type: SORT_FROM_PRICE})
export const sortByNameAction = () => ({type: SORT_NAME})
export const defaultSortAction = () => ({type: DEFAULT_SORT})