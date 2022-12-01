import { createSlice } from "@reduxjs/toolkit";
export const Slice=createSlice({
        name:"sample",
        initialState:{
            name:"sakthi",
            task:[]
        },
        reducer:{
            task:(state,action)=>{
                state.name=action.payload
            }
        }
})

export default Slice.reducer