import React, { useContext } from 'react'
import Post from './Post'
import { PostLists } from '../context/post-list-store';
import Welcome from './Welcome';

const PostList = () => {

  const { postList, addInitialPosts } = useContext(PostLists);

  const handlePostFetch = ()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addInitialPosts(data.posts);
    });

  }


 
  return (
    <div>
        {
          postList.length === 0 && <Welcome onFetch = {handlePostFetch}/>
        }
       {postList.map((post)=>{
       return <Post key={post.id} post={post}/>
      })} 

    </div>
  )
}

export default PostList
