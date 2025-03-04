import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./components/home/HomePage";
import NotFoundPage from './components/ui/NotFoundPage';
import ProductsPage from "./components/products/ProductsPage";


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="products/:slug" element={<ProductsPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
      </Route>
    </Routes>
    </BrowserRouter>)
}

export default App
