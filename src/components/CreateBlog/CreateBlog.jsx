import React, {useContext} from 'react'
import blogContext from '../../Context/Blogs/BlogContext'
const CreateBlog = () => {
    const context = useContext(blogContext)
    const {addBlog} = context;
    const [blog, setblog] = useState({
        authorName: "",
        imageUrls: [],
        texts: [],
        title: "",
    })
    const handleSubmit =() =>{

    } 
    const onchange = (e) =>{
        setblog({...blog, [e.target.name]: e.target.value})
    }
    return (
        <div>
            
        </div>
    )
}

export default CreateBlog
