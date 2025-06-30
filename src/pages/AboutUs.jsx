import Footer from "../components/Footer"
import HomeAboutUs from "../components/Home/HomeAboutUs";
// import AboutUsDetails from "../components/AboutUs/AboutUsDetails";
import TeamShowcase from "../components/AboutUs/TeamShowcase";
import Testonomials from '../components/AboutUs/Testonomials';
import OurVision from '../components/AboutUs/OurVision';
import NGOInfo from '../components/AboutUs/NGOInfo';

function AboutUS() {
  return (
    <>
    <HomeAboutUs id="aboutus-home" />
    {/* <AboutUsDetails id="aboutus-details" /> */}
    <TeamShowcase id="aboutus-team" />
    <OurVision id="aboutus-vision" />
    <NGOInfo id="aboutus-ngo-info" />
    <Testonomials id="aboutus-testimonials" />
    <Footer />
    </>
  )
}

export default AboutUS