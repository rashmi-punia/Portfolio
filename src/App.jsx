// import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Parallax from './components/Parallax'
import Services from './components/Services'
import Portfolios from './components/Portfolios'
import Conatct from './components/Conatct'


function App() {
  return(
  <>
   <div className='*:bg-gradient-to-b from-slate-950 to-slate-800 h-screen *:w-screen *:h-screen'>
      <section className='overflow-hidden'>
     
       <Hero/>
  
      </section>
      <section>
        <Parallax type="services"/>
      </section>
      <section>
        <Services/>
      </section>
      <section>
        <Portfolios/>
      </section>
      <section>
  <Conatct/>
      </section>
    </div>
    </>
  )
}

export default App
