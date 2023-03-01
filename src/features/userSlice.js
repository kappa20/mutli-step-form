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
      addAddOnsTitle:(state,action)=>{
        let newTitle = action.payload;
        let newSet = new Set(state.value.addOnsTitles);
    
        newSet.add(newTitle);
        

        state.value.addOnsTitles = Array.from(newSet);
        
      }, 
      
      removeAddOnsTitle:(state,action)=>{
        let newTitle = action.payload;
        let newSet = new Set(state.value.addOnsTitles);
        newSet.delete(newTitle);
        state.value.addOnsTitles = Array.from(newSet);

      }
    
    },
  })

  export const {updateInfo,addAddOnsTitle,removeAddOnsTitle}  = userSlice.actions;

  export default userSlice.reducer;