import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./components/home/HomePage";
import NotFoundPage from './components/ui/NotFoundPage';
import ProductsPage from "./components/products/ProductsPage";
import { useState, useEffect } from "react";
import api from "./api";
import CartPage from "./components/carts/CartPage";

const App = () => {

  const [cartItems, setNumberCartItems] = useState(0);
  const cartCode = localStorage.getItem('cart_code')

  useEffect(function(){
    if (cartCode){
      api.get(`get_cart_stat?cart_code=${cartCode}` )
    .then(res => {
      console.log(res.data)
      setNumberCartItems(res.data.num_of_items)
      
      })
    .catch((err => {
      console.error(err)
    }))
    }

  })


  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<MainLayout cartItems={cartItems} />}>
      <Route index element={<HomePage />}/>
      <Route path="products/:slug" element={<ProductsPage setNumberCartItems={setNumberCartItems}/>}/>
      <Route path="/cart" element={<CartPage setNumberCartItems={setNumberCartItems}/>}/>
      <Route path="*" element={<NotFoundPage />}/>

      </Route>
    </Routes>
    </BrowserRouter>)
}

export default App
