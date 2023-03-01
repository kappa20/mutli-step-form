import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:{
        name:'',
        email:'',
        phone:'',
        plan:{
            title:'',
            type:'',
            price:''
        },
    }
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
      updateInfo: (state, action) => {
        state.value = action.payload
      },
    },
  })

  export const {updateInfo}  = userSlice.actions;

  export default userSlice.reducer;