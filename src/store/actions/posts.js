import { setError, setLoading, setPosts } from "../reducers/postsSlice";

const fetchAllPosts = () => async(dispatch) =>{
    dispatch(setLoading())
 
     try{
        const response = await fetch("http://localhost:4000/posts");
        const data = await response.json();
        dispatch(setPosts(data))
     }catch (err) {
        dispatch(setError(err.message))
     }
}

export default fetchAllPosts