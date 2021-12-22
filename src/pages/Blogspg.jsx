import Footer from '../components/Home/footer'
import Navbar3 from '../components/Home/navbar3'
import Carousel from '../components/Blogs/Carousel'
import HighlightBlog from '../components/Blogs/HighlightBlog'
import SubHighlightBlogs from '../components/Blogs/SubHighlightBlogs'
import SoundButton from '../components/AboutUs/SoundButton'
import  React ,{ useContext } from 'react'
const Blogspg = () => {

    // const  context = useContext(blogContext);
    // const {blog, setBlog} = context;
    // const a = useContext(blogContext);
    return (
        <div>
            <Navbar3 />
            <Carousel/>
            {/* <h1>this is about {a.blog.authorName}</h1> */}
            <HighlightBlog/>
            <SubHighlightBlogs/>
            <SoundButton button="Load more topics"/>
            <Footer/>
        </div>
    )
}

export default Blogspg
