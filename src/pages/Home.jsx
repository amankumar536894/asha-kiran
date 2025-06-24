import Carousel from '../components/Home/Carousel'
import About from '../components/Home/About'
import Gallery from '../components/Home/Gallery'
import './Home.css'
import ImageGrid from '../components/Home/ImageGrid'
import ImpactHighlight from '../components/Home/ImpactHighlight'
import Footer from '../components/Footer'
import OurMission from '../components/Home/OurMission'

function Home() {
  return (
    <div className="home-page">
      {/* Hero Carousel Section */}
      <Carousel />
      <About />
      <Gallery />
      <ImageGrid />
      <ImpactHighlight />
      <OurMission />
      <Footer />
    </div>
  )
}

export default Home