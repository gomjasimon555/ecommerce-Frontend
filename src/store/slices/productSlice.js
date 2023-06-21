import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
  data : null,
  loading: false,
  error: false
}

//createAsyncThunk should be defined when our reducer function is async
export const fetchAllData = createAsyncThunk('product/fetchAllData', async (payload)=>{
  try{
    let url = `http://localhost:8080/api/products?api_key=${process.env.REACT_APP_API_KEY}`;

   if(payload){
    url = `${url}&category=${payload}`

   }
    const {data}= await axios.get(url);
    return data
   }
  catch(err){
    return err
  }

})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },

  extraReducers:{
    [fetchAllData.pending]:(state)=>{
      state.loading = true;
    },

    [fetchAllData.fulfilled]:(state, action)=>{
      state.loading = false;
      state.data = action.payload;
    },
    [fetchAllData.rejected]:(state, action)=>{
state.loading = false;
state.error=false;
  }
}
})
// Action creators are generated for each case reducer function
export const { } = productSlice.actions

export default productSlice.reducer