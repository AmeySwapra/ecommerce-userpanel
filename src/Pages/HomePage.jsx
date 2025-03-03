import React from 'react'
import Footer from '../components/common/Footer'
import HomeCard from '../Components/HomeCard'
import Hero from '../Components/Hero'
import ProductSlider from '../Components/ProductSlider'
import BlogSection from '../Components/BlogSection'
import Testimonial from '../Components/Testimonial'
import Header from '../Components/Common/Header'

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