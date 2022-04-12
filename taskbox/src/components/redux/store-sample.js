//import redux lib
import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slice'


//create store
export const storeSample = configureStore({
  reducer: {
    counter: counterSlice,
  }
})

//create slice - slice.js


//use store - useSelector
//dispatch 
