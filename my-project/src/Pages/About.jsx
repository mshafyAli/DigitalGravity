import BusinessNeeds from "../Components/AboutSection/BusinessNeeds"
import Expertise from "../Components/AboutSection/Expertise"
import LandScape from "../Components/AboutSection/LandScape"
import NavBannerBg from "../Components/AboutSection/NavBannerBg"
import Strategy from "../Components/AboutSection/Strategy"
import Footer from "../Components/Footer"
import Social from "../Components/Social"
import Worth from "../Components/Worth"

const About = () => {
  return (
    <div>
      <NavBannerBg/>
      <Strategy/>
      <LandScape/>
      <BusinessNeeds/>
      <Expertise/>
      <Worth/>
      <Social/>
      <Footer/>
    </div>
  )
}

export default About