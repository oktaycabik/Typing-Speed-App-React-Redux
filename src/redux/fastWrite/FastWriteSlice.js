import { createSlice } from "@reduxjs/toolkit";

export const writeSlice=createSlice({
    name:"write",
    initialState:{
        verbs:[],
      
        wordsindex:0,
        corect:0
    },
    reducers:{
        CopyVerbs:(state,data) =>{
            const wordToCompare=state.verbs[state.wordsindex]
            const doesItMatch=wordToCompare===data.payload.trim()
            console.log(doesItMatch)
            if(doesItMatch) {
              state.corect=state.corect+1
            }else{
              state.corect=state.corect-1
            }
        },
        SetVerbs:(state,data)=>{
         state.verbs=data.payload
        },
        setWordsIndex:(state,data)=>{
            state.wordsindex=data.payload+1
            
        }
    }
})

export default writeSlice.reducer;
export const {CopyVerbs}=writeSlice.actions
export const {SetVerbs}=writeSlice.actions
export const {setWordsIndex}=writeSlice.actions