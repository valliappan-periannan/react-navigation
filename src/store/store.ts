import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user'

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

//type definition usage throughout the application
// default syntax
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch