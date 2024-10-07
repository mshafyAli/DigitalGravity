import Award from "../Components/Award"
import Brands from "../Components/Brands"
import Faq from "../Components/Faq"
import Footer from "../Components/Footer"
import NavBannerBg from "../Components/NavBannerBg"
import OurWork from "../Components/OurWork"
import Services from "../Components/Services"
import Social from "../Components/Social"
import Worth from "../Components/Worth"

const Home = () => {
  return (
    <div>       
        <NavBannerBg/>
        <Services/>
        <OurWork/>
        <Brands/>
        <Award/>
        <Faq/>
        <Worth/>
        <Social/>
        <Footer/>
    </div>
  )
}

export default Home