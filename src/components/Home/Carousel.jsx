import { useEffect } from 'react'
import './Carousel.css'
import { useNavigate } from 'react-router-dom'

function Carousel() {
  useEffect(() => {
    // Initialize Bootstrap carousel after component mounts
    const carouselElement = document.getElementById('heroCarousel')
    if (carouselElement) {
      // Bootstrap carousel is automatically initialized when using data-bs-* attributes
      // No additional JavaScript needed for basic functionality
    }
  }, [])

  const navigate = useNavigate();
  const handleDonate = () => {
    navigate('/donate');
  }

  // Carousel data - you can replace these with your actual images
  const carouselData = [
    {
      id: 1,
      image: '/carousel/image2.jpeg',
      // title: 'Woman Empowerment',
      // subtitle: 'Building a brighter future together',
      // description: 'We work tirelessly to create positive change in communities through education, healthcare, and sustainable development initiatives.'
    },
    {
      id: 2,
      image: '/carousel/image1.jpeg',
      // title: 'Education for All',
      // subtitle: 'Unlocking potential through learning',
      // description: 'Providing quality education to underprivileged children and youth, ensuring every child has the opportunity to learn and grow.'
    },
    {
      id: 3,
      image: '/carousel/image3.jpeg',
      // title: 'Healthcare Access',
      // subtitle: 'Caring for communities',
      // description: 'Ensuring access to basic healthcare services for all communities, promoting wellness and preventing illness.'
    }
  ]

  return (
    <section className="hero-carousel-section">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {carouselData.map((_, index) => (
            <button 
              key={index}
              type="button" 
              data-bs-target="#heroCarousel" 
              data-bs-slide-to={index} 
              className={index === 0 ? 'active' : ''} 
              aria-current={index === 0 ? 'true' : 'false'} 
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {carouselData.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div 
                className="carousel-background"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.image}')`
                }}
              >
                {/* <div className="carousel-content">
                  <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                      <h1 className="carousel-title">{slide.title}</h1>
                      <div className="carousel-buttons">
                        <button className="btn btn-primary btn-lg me-3">Learn More</button>
                        <button className="btn btn-outline-light btn-lg" onClick={handleDonate}>Donate Now</button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default Carousel 