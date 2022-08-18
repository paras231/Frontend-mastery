import React from 'react'
import { useReducer } from 'react'
import {fetchPostReducer} from "./ReducerHook/reducer";
import {initialState} from "./ReducerHook/reducer";
import {fetchPost} from "./ReducerHook/apiCalls";


const Post = () => {
    const [state, dispatch] = useReducer(fetchPostReducer, initialState);
    
    React.useMemo(()=>{
        fetchPost(dispatch);
    },[state.posts])

    

    if(state.loading){
        return <div>Loading...</div>
    }
    if(state.error){
        return <div>Error</div>
    }

  return (
    <>
     {
      state.posts?.map(post=>{
          return <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
          </div>
      })
     }
    </>
  )
}

export default Post