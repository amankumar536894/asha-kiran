import GalleryHeader from '../components/Gallery/GalleryHeader';
import GalleryGrid from '../components/Gallery/GalleryGrid';
import DonateBanner from '../components/Gallery/DonateBanner';
import Footer from '../components/Footer';
import GalleryGallery from '../components/Gallery/GalleryGallery';
import NewsGalleryGrid from '../components/Gallery/NewsGalleryGrid';

function Gallery() {
    return (
        <>
         <GalleryHeader />
         <GalleryGrid />
         <NewsGalleryGrid />
         <GalleryGallery />
         <DonateBanner/>
         <Footer />
        </>
    )
}

export default Gallery