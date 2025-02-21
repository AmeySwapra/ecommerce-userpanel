import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductsPage from './Pages/ProductsPage'
import CartPage from './Pages/CartPage'
import ContactPage from './Pages/ContactPage'
import GalleryPage from './Pages/GalleryPage'
import AboutPage from './Pages/AboutPage'
import PaymentPage from './Pages/PaymentPage'
import ProfilePage from './Pages/ProfilePage'
import BlogsPage from './Pages/BlogsPage'
import SingleBlogPage from './Pages/SingleBlogPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/gallery' element={<GalleryPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/payments' element={<PaymentPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/blogs' element={<BlogsPage/>}/>
            <Route path='/blog/:title' element={<SingleBlogPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App