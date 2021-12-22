import {useState} from "react"
import blogContext from "./BlogContext";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
const BlogState = (props) =>{


    const initial= [
        {
        authorName: "Priya",
        creationDate:"",
        imageUrls: [],
        slider : false,
        texts:[],
        title: "",
    }
]
    const [blog, setBlog] = useState(initial)
    
    // Add 
    const addBlog = (authorName,imageUrls, title, texts) =>{
        // use all the parameters to create a blog object
        const blog = {

        }
     setBlog(blog.push(blog))   
    }
    // Read
    const readBlog = async() =>{
        const usersCollectionRef = collection(db, "blogs")
        const data = await getDocs(usersCollectionRef);
        setBlog(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
        console.log(blog);
    }
    // Update
    const updateBlog = () =>{

    }
    // Delete
    const deleteBlog = () =>{

    }
    return (
        <blogContext.Provider value = {{blog, addBlog, readBlog, updateBlog, deleteBlog}}>
            {props.children}
        </blogContext.Provider>
    )
}

export default BlogState;