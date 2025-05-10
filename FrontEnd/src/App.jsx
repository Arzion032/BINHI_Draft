import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./components/home/HomePage";
import NotFoundPage from './components/ui/NotFoundPage';
import ProductsPage from "./components/products/ProductsPage";
import { useState, useEffect } from "react";
import api from "./api";
import CartPage from "./components/carts/CartPage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import LoginPage from "./components/user/LoginPage";
import ProtectedRoute from "./components/ui/ProtectedRoute";

import UserProfilePage from "./components/user/UserProfilePage";
import { AuthProvider } from "./components/context/AuthContext";

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
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<MainLayout cartItems={cartItems} />}>
          <Route index element={<HomePage />}/>
          <Route path="products/:slug" element={<ProductsPage setNumberCartItems={setNumberCartItems}/>}/>
          <Route path="/cart" element={<CartPage setNumberCartItems={setNumberCartItems}/>}/>
          <Route path="checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>}/>
          <Route path="login" element={<LoginPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
          <Route path="/profile" element={<UserProfilePage />}/>

          </Route>
        </Routes>
      </BrowserRouter>

    </AuthProvider>
    
    )
}

export default App
