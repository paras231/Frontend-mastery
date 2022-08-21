// here i will use redux toolkit  for data fetching.

import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';  

const initialState = {

    posts:[],
    loading:false,
    error:null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts',async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
})

export const postSlice = createSlice({
    name:'posts',
    initialState,
    extraReducers:(builder)=>{
      builder.addCase(fetchPosts.pending,(state,action)=>{
            state.loading = true;
      })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.posts = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.error = action.error;
            state.loading = false;
        })
    }

})
export default postSlice.reducer;