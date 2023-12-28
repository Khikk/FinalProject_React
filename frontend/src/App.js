import { Link, Route, Routes } from "react-router-dom"
import ProductListPage from "./pages/ProductListPage/ProductListPage"
import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './App.css'
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProductInfoPage from "./pages/ProductInfoPage/ProductInfoPage"
import BasketPage from "./pages/BasketPage/BasketPage"


function App(){

    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/categories/all" element={<CategoriesPage/>}/>
                <Route path="category/:id" element={<ProductListPage type='category'/>}/>
                <Route path="products/all" element={<ProductListPage type='all'/>}/>
                <Route path="products/sale" element={<ProductListPage type='sale'/>}/>
                <Route path='products/:id' element={<ProductInfoPage/>}/>
                <Route path='cart' element={<BasketPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>


            </Routes>
            <Footer/>
        </div>
    )
}


export default App