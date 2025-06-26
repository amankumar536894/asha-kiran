import Carousel from '../components/Home/Carousel'
import HomeAboutUs from '../components/Home/HomeAboutUs'
import HomeGallery from '../components/Home/HomeGallery'
import './Home.css'
import ImageGrid from '../components/Home/ImageGrid'
import OurMission from '../components/Home/OurMission'
import Footer from '../components/Footer'
import TeamShowcase from '../components/AboutUs/TeamShowcase'

function Home() {
  return (
    <div className="home-page">
      <Carousel />
      <HomeAboutUs />
      <HomeGallery />
      <ImageGrid />
      <TeamShowcase />
      <OurMission />
      <Footer />
    </div>
  )
}

export default Home