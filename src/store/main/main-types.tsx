export interface IMain{
    user:string
    auth:boolean
}

export enum MainctionEnum{
    SET_USER = 'SET_USER',
    SET_AUTH = 'SET_AUTH'
}

export interface SetAuthAction{
    type: MainctionEnum.SET_AUTH
    payload: boolean
}

export interface SetUserAction{
    type: MainctionEnum.SET_USER
    payload: string
}

export type MainActions = SetAuthAction | SetUserAction