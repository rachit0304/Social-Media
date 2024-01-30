import React, { useContext, useRef } from 'react'
import { PostLists } from '../context/post-list-store';

const CreatePost = () => {

  const {addPost} = useContext(PostLists)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const descriptionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event)=>{
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const description = descriptionElement.current.value;
    const tags = tagsElement.current.value.split(' ');

    addPost({userId , postTitle , description , tags});

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    descriptionElement.current.value = "";
    tagsElement.current.value = "";
    

  }

  return (
    <form className='create-post' onSubmit={handleSubmit}>

          <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">UserId</label>
          <input type="text" ref={userIdElement} className="form-control" id="userid" placeholder="Enter your userId" />
          </div>
          <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Post Title</label>
          <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="Enter title of your post" />
          </div>
          <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"  >Description</label>
          <textarea className="form-control" ref={descriptionElement} id="description" rows="3" placeholder='describe more in detail'></textarea>
          </div>
          <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Tags</label>
          <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Enter tags with space" />
          </div>

          <button className='dlt-btn' type='submit' >Post</button>

    </form>
  )
}

export default CreatePost
