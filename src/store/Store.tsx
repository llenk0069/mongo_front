import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { MainReduser } from "./main/main-reducer";

export const store = configureStore({
    reducer:{
        main:MainReduser
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().prepend(thunk)
})

export type AppDispatch = typeof store.dispatch
export type rootState = ReturnType<typeof store.getState>