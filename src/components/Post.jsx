import React, { useContext } from 'react'
import { PostLists } from '../context/post-list-store'

const Post = ({post}) => {

  const {deletePost} = useContext(PostLists);
  return (
     <div>
        <div className="card post-card" >
            <div className="card-body">
                <h5 className="card-title">{post.title}  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{post.reactions}</span></h5>
                <p className="card-text">{post.description}</p>
                {post.tags.map((tag)=>{
                  return <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
                })}
                <br />
                <button className='dlt-btn' onClick={()=>deletePost(post.id)}>Delete</button>
          
            </div>
        </div>
    </div>
  )
}

export default Post
