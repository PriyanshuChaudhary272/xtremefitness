import { db } from "../firebase";
import { collection, getDocs, orderBy, query, limit, addDoc, startAfter, where } from "firebase/firestore";
import {createStore} from "redux";
// const redux = require("redux");

const blogsReducers = (state = { blog: [], last: 3, lastvisible:{}}, action) => {
    if (action.type === "readblogs") {
        const q = query(collection(db, "blogs"),
            orderBy("creationDate", "desc"),
            limit(1));
        // where("slider", "==", false),

        getDocs(q)
            .then(data => {
                const lastvisible = data.docs[data.docs.length - 1];
                const blogs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                return {
                    blog: blogs,
                    last: data.docs.length,
                    lastvisible: lastvisible
                };
            })
            .catch(err => {
                return state;
            })
    }
    if(action.type === "paginate"){
        if (state.lastvisible) {
            const nextquery = query(collection(db, "blogs"),
                orderBy("creationDate", "desc"),
                startAfter(state.lastvisible),
                limit(3));
            getDocs(nextquery)
                .then(d => {
                    const lastvisible = d.docs[d.docs.length - 1];
                    const nextdata = d.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                    const data = [...state.blog, ...nextdata];
                    return{
                        blog: data,
                        last: state.last + d.docs.length,
                        lastvisible: lastvisible
                    }
                })
                .catch(err => {
                    return state;
                })
        }
    }
    console.log('helo')
    return state;

}
const store = createStore(blogsReducers);

export default store;