import BlogHeader from '../components/Blogs/BlogHeader'
import BlogCategories from '../components/Blogs/BlogCategories'
import BlogsList from '../components/Blogs/BlogsList'
import BlogNewsletter from '../components/Blogs/BlogNewsletter'
import Footer from '../components/Footer'

function Blog(){
    return(
        <>
            <BlogHeader />
            <BlogsList />
            <BlogNewsletter />
            <Footer/>
        </>
    )
}

export default Blog