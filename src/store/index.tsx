import { configureStore } from '@reduxjs/toolkit'

// import tempReducer from "./slice/temp"

export const store = configureStore({
    reducer: {
        // temp: tempReducer,
    },
})

export default store