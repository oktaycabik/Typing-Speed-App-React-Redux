import {configureStore} from "@reduxjs/toolkit"  
import  writeSlice  from "./fastWrite/FastWriteSlice"

export const store =configureStore({
    reducer:{
        item:writeSlice
    }
})