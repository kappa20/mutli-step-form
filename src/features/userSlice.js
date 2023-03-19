import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:{
        name:"",
        email:"",
        phone:"",
        plan:'',
        planType:'month',
        addOnsTitles:[]

    }
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
      updateInfo: (state, action) => {

        state.value =Object.assign(state.value,action.payload);
      },
      addAddOnsTitles:(state,action)=>{
  
        let titles = action.payload
        state.value.addOnsTitles = titles
  
      }
    
    },
  })

  export const {updateInfo,addAddOnsTitles}  = userSlice.actions;

  export default userSlice.reducer;