import React from 'react'
import About from '../Components/About'
import dryfruit from "../assets/images/dryfruits.jpg";
import Header from '../Components/Common/Header';
import Banner from '../Components/Common/Banner';
import Footer from '../components/common/Footer';
import HiringPartners from '../Components/Common/HiringPartners';
import VisionMission from '../Components/VisionMission';


function AboutPage() {
  return (
    <>
       <Header/>
       <Banner imageUrl={dryfruit} title={"ABOUT US"} isAboutUs={true} />
       <About/>
       <VisionMission/>
       <HiringPartners/>
       <Footer/>
    </>
  )
}

export default AboutPage