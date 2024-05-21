import React from 'react'
import Hero from '../components/Hero'
import Parallax from '../components/Parallax'
import Services from '../components/Services'
import Portfolios from '../components/Portfolios'
import Conatct from '../components/Conatct'

const Home = ({setContactModal}) => {
  return (
    <>
    <div className=' *:h-screen'>

    <section className=''>
     
     <Hero setContactModal={setContactModal}/>

    </section>
    {/* <section>
      <Parallax type="services"/>
    </section> */}
    <section>
      <Services/>
    </section>
    <section>
      <Portfolios/>
    </section>
    {/* <section>
<Conatct/>
    </section> */}
    </div>
      
    </>
  )
}

export default Home
