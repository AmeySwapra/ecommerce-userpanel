import React from 'react'
import About from '../Components/About'
import dryfruit from "../assets/images/dryfruits.jpg";
import Header from '../Components/Common/Header';
import Banner from '../Components/Common/Banner';
import Footer from '../Components/Common/Footer';

function AboutPage() {
  return (
    <>
       <Header/>
       <Banner imageUrl={dryfruit} title={"ABOUT US"} isAboutUs={true} />
       <About/>
       <Footer/>
    </>
  )
}

export default AboutPage