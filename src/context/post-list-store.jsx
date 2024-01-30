import { createContext, useReducer } from "react";

export const PostLists = createContext({
    postList: [],
    addPost: ()=>{},
    deletePost: ()=>{},
    addInitialPosts: ()=>{},
});

const postListReducer = (currPostList , action)=>{
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post)=> post.id !== action.payload.postId);
    }

    else if(action.type === 'ADD_POST'){
        newPostList = [
            action.payload , ...currPostList
        ]
    }

    else if(action.type === 'ADD_POSTS'){
        newPostList = action.payload.posts;
    }

    return newPostList;
}

const PostListProvider = ({children}) =>{

    const [postList, dispatchPostList] = useReducer(postListReducer , []);


    const addPost =({userId , postTitle , description, tags}) =>{
        dispatchPostList({
            type: "ADD_POST",
            payload:{
               id: Date.now(),  // this can not be done for large apps
               title: postTitle,
               description: description,
               tags: tags,
               userId: userId,
            }
        })

    }

    const deletePost =(postId) =>{
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            },
        })

    }


    const addInitialPosts = (posts) =>{
        dispatchPostList({
            type: "ADD_POSTS",
            payload: {
                posts
            }
        })
    }

    return(
    <PostLists.Provider value={{postList , addPost, deletePost, addInitialPosts}}>
        {children}
    </PostLists.Provider>
    )
}

export default PostListProvider;