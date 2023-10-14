import { ThunkAction } from "redux-thunk";
import { AppDispatch, rootState } from "../Store";
import { MainActions, MainctionEnum, SetAuthAction, SetUserAction } from "./main-types";

export const MainActionCreators = {
    setUser: (payload:string):SetUserAction=>({type:MainctionEnum.SET_USER, payload}),
    setAuth: (payload:boolean):SetAuthAction=>({type:MainctionEnum.SET_AUTH, payload}),
    setUserAsync:(payload:string):ThunkAction<void,rootState,any, MainActions>=>{
        return async(dispatch:AppDispatch)=>{
            new Promise((res,rej)=>{
                setTimeout(() => { 
                    res(1)
                }, 4000);
            }).then(()=>dispatch(MainActionCreators.setUser(payload)))
        }
    }
}