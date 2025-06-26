import Footer from "../components/Footer"
import HomeAbout from "../components/Home/HomeAboutUs";
import AboutUsDetails from "../components/AboutUs/AboutUsDetails";
import TeamShowcase from "../components/AboutUs/TeamShowcase";
import Testonomials from '../components/AboutUs/Testonomials';
import OurVision from '../components/AboutUs/OurVision';

function AboutUS() {
  return (
    <>
    <HomeAbout />
    {/* <AboutUsDetails /> */}
    <TeamShowcase />
    <OurVision />
    <Testonomials />
    <Footer />
    </>
  )
}

export default AboutUS