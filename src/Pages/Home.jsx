import React from 'react'
import Hero from '../components/Hero'
import Parallax from '../components/Parallax'
import Services from './About'
import Portfolios from './Projects'
import Conatct from '../components/Conatct'

const Home = ({setContactModal,activeTab,setActiveTab,aboutRef,portfolioRef}) => {
  return (
    <>
    <div className=''>

     
     <Hero setContactModal={setContactModal}/>

    {/* <section>
      <Parallax type="services"/>
    </section> */}
      <Services aboutRef={aboutRef} />
      <Portfolios portfolioRef={portfolioRef} />
  
    </div>
      
    </>
  )
}

export default Home
