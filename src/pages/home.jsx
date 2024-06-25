import TopBar from '../Comp/TopBar.jsx'
import Hero from '../Comp/HeroSection.jsx'
import AboutMe from '../Comp/AboutMe.jsx'
import Therapy from '../Comp/Therapy.jsx'
import PriceList from '../Comp/PriceList.jsx'
import Contact from '../Comp/Contact.jsx'
import Footer from '../Comp/Footer.jsx'

const home = () =>{
    return(
      <>
        <TopBar />
        <Hero />
        <AboutMe />
        <Therapy />
        <PriceList />
        <Contact />
        <Footer />
      </>
    )
  }

  export default home