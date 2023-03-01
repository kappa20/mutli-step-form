import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:{
        name:"",
        email:"",
        phone:"",
        plan:'',
        planType:''
    }
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
      updateInfo: (state, action) => {
        state.value =Object.assign(state.value,action.payload);
      },
    },
  })

  export const {updateInfo}  = userSlice.actions;

  export default userSlice.reducer;