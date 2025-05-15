import { configureStore } from "@reduxjs/toolkit";
import ageReducer from '../features/ageSlice'


const store = configureStore({
    reducer: {
        petAge: ageReducer
    }
})

export default store