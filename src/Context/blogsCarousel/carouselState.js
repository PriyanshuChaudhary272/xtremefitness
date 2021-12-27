import { useState } from "react"
import blogCarouselContext from "./carouselContext";
import { db } from "../../firebase";
import { collection, getDocs, orderBy, query, limit, where } from "firebase/firestore";
const BlogCrouselState = (props) => {

    const [carousel, setCarousel] = useState([])
    // Add 
    // here we add a blog to carousel
    // const addBlogtoCarousel = async () => {
    // }
    // Read
    const readCarousel = async () => {
        const q = query(collection(db, "blogs"),
            where("slider","==", true),
            limit(8));
            // orderBy("creationDate", "desc"),

        getDocs(q)
            .then(data => {
                setCarousel(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            })
            .catch(err => {
                console.log("error")
            })
    }

    return (
        <blogCarouselContext.Provider value={{carousel, readCarousel}}>
            {props.children}
        </blogCarouselContext.Provider>
    )
}

export default BlogCrouselState;