import GalleryHeader from '../components/Gallery/GalleryHeader';
import GalleryGrid from '../components/Gallery/GalleryGrid';
import DonateBanner from '../components/Gallery/DonateBanner';
import Footer from '../components/Footer';
import GalleryGallery from '../components/Gallery/GalleryGallery';

function Gallery() {
    return (
        <>
         <GalleryHeader />
         <GalleryGrid />
         <GalleryGallery />
         <DonateBanner/>
         <Footer />
        </>
    )
}

export default Gallery