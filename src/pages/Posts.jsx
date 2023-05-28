import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dead from './Posts.module.css';
import { useDispatch, useSelector } from "react-redux";
import fetchAllPosts from "../store/actions/posts";

const Posts = () => {
     const { loading, posts, error } = useSelector((state) => state.postsReducer);
     const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
         dispatch(fetchAllPosts())
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <div className={dead.from}>
      {loading || !posts.length
        ? "loading..."
        : posts.map((el) => {
            return (
              <div key={el.id} className={dead.content}>
                <h1 className={dead.nav}>{el.id} <br /> {el.title}
                 <button onClick={() => navigate(`/posts/${el.id}`)}>Details</button></h1>
                 <div className={dead.ser}> <div className={dead.text}>{el.body}</div>
                <Link to={`/posts/${el.id}`}> More... </Link> </div>
              </div>
            );
          })}
    </div>
  );
};

export default Posts;