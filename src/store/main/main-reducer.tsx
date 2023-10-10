import { IMain, MainActions, MainctionEnum } from "./main-types";

const defaultValue:IMain = {
    user:'Anton',
    auth:false
}

export const MainReduser = (state:IMain = defaultValue, action:any):IMain=>{
    switch(action.type){
        case MainctionEnum.SET_AUTH:
            return {...state, auth:action.payload}
        case MainctionEnum.SET_USER:
            return {...state, user:action.payload}
        default:
            return state
    }
}