import { useState } from "react"
import blogContext from "./BlogContext";
import { db } from "../../firebase";
import { collection, getDocs, orderBy, query, limit, addDoc, startAfter } from "firebase/firestore";
const BlogState = (props) => {

    const [blog, setBlog] = useState([])
    const [last, setLast] = useState(0)
    const [lastVisible, setlastVisible] = useState()
    // Add 
    const addBlog = async (authorName, imageUrls, title, texts) => {
        // use all the parameters to create a blog object
        const blog = {
            authorName: "Priyanshu",
            imageUrls: [
                "https://images.unsplash.com/photo-1639850799718-558924c8a5ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1651&q=80",
                "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                "https://images.unsplash.com/photo-1484910292437-025e5d13ce87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80",
                "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
                "https://images.unsplash.com/photo-1640007973870-deb7956b1d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            ],
            readTime: 5,
            creationDate: 1640239386524,
            texts: [
                "New Market Strategy for Influencer Is becoming best before Influencers Worth it?",
                "Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives.",
                "Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. ",
                "Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. Influencer marketing has seen an upward growth curve ever since social media became an integral part of our lives. social media became an integral part of our lives. "
            ],
            title: "New Market Strategy for Influencer Is becoming best before Influencers Worth it?"
        }
        const blogRef = collection(db, "blogs");
        await addDoc(blogRef, blog);
    }

    // Read
    const readBlogs = async () => {
        const q = query(collection(db, "blogs"),
            orderBy("creationDate", "desc"),
            limit(7));

        getDocs(q)
            .then(data => {
                const lastvisible = data.docs[data.docs.length - 1];
                setlastVisible(lastvisible);
                setLast(data.docs.length)
                setBlog(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                console.log(data.docs.length)
            })
            .catch(err => {
                console.log("error")
            })
    }

    const paginateBlogs = async () => {
        if(lastVisible){
        const nextquery = query(collection(db, "blogs"),
            orderBy("creationDate", "desc"),
            startAfter(lastVisible),
            limit(3));
        getDocs(nextquery)
            .then(data => {
                setlastVisible(data.docs[data.docs.length - 1]);
                const nextdata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setBlog((blog) => [...blog, ...nextdata]);
                setLast(last + data.docs.length)
            })
            .catch(err => {
                console.log("error")
            })
        }
    }

    // Update
    const updateBlog = () => {

    }

    // Delete
    const deleteBlog = () => {

    }
    return (
        <blogContext.Provider value={{ blog, addBlog, readBlogs, updateBlog, deleteBlog, paginateBlogs, last}}>
            {props.children}
        </blogContext.Provider>
    )
}

export default BlogState;