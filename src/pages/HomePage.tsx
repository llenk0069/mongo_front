import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userServices } from "../services/user-services"
import { MainActionCreators } from "../store/main/main-actionCreators"
import { AppDispatch, rootState } from "../store/Store"

const HomePage:FC=()=>{
    const dispatch:AppDispatch = useDispatch()
    const getState = useSelector((state:rootState)=>state.main)
    const handel = async ()=>{
        const tok = await userServices.login()
        dispatch(MainActionCreators.setUserAsync('Alex'))
        console.log(tok)
    }
    const handel2 = async ()=>{
        const users = await userServices.getUsers()
        console.log(users)
    }

    const refreshHandel = async ()=>{
        const tokens = await userServices.refresh()
        console.log(tokens)
    }
    return(
        <div className="container">
                    <h1 className="text-center">Hello!!!</h1>
                    <p className="text-center">{getState.user}</p>
                    <div className="row">
                        <button className="btn btn-success col-4 m-4" onClick={handel}>dispatch</button>
                        <button className="btn btn-info col-4  m-4" onClick={handel2}>users</button>
                        <button className="btn btn-warning col-4  m-4" onClick={refreshHandel}>refresh</button>
                    </div>            
                </div>
    )
}

export default HomePage