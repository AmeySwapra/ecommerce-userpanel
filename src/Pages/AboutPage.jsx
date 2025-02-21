import React from 'react'
import About from '../Components/About'
import ProductSlider from '../Components/ProductSlider'
import BlogSection from '../Components/BlogSection'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

function AboutPage() {
  return (
    <>
       <Header/>
       <About/>
       <ProductSlider/>
       <BlogSection/>
       <Footer/>
    </>
  )
}

export default AboutPage