import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HomeCard from '../Components/HomeCard'
import Hero from '../Components/Hero'
import ProductSlider from '../Components/ProductSlider'
import BlogSection from '../Components/BlogSection'
import Testimonial from '../Components/Testimonial'

function HomePage() {
  return (
    <>
      <Header/>
      <HomeCard/>
      <Hero/>
      <ProductSlider/>
      <BlogSection/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default HomePage