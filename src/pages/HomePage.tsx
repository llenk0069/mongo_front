import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MainActionCreators } from "../store/main/main-actionCreators"
import { AppDispatch, rootState } from "../store/Store"

const HomePage:FC=()=>{
    const dispatch:AppDispatch = useDispatch()
    const getState = useSelector((state:rootState)=>state.main)
    const hendel = ()=> dispatch(MainActionCreators.setUserAsync('Alex'))
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Hello!!!</h1>
                    <p className="text-center">{getState.user}</p>
                    <button className="btn btn-success" onClick={hendel}>dispatch</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage