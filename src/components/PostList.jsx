import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostLists } from '../context/post-list-store';
import Welcome from './Welcome';
import Loader from './Loader';

const PostList = () => {

  const { postList, addInitialPosts } = useContext(PostLists);

  const [fetching ,setFetching] = useState(false);


  useEffect(()=>{

    setFetching(true);

    const controller = new AbortController();  // this is abort controller , it aborts the api req when it is not rendering  , this also reduces load on the server and the internet of the users

    const signal = controller.signal;

    fetch('https://dummyjson.com/posts' , {signal})
    .then(res => res.json())
    .then(data => {
      addInitialPosts(data.posts);
      setFetching(false);
    });


    return ()=>{
      console.log("Use- effect cleanup")  // this is called useEffect cleanup function. it is called when the page changes and useEffect is of no use in that page
      controller.abort();
    }
  } , [])

  


 
  return (
    <div>
      {
        fetching && <Loader/>
      }
        {
          !fetching && postList.length === 0 && <Welcome/>
        }

       {!fetching && postList.map((post)=>{
       return <Post key={post.id} post={post}/>
      })} 

    </div>
  )
}

export default PostList
