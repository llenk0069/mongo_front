import { FC, useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import '../style/style.css'

interface ICell{
    cell:Cell
    onClick:(cell:Cell)=>void
    selected?:boolean
}

const CellComponet:FC<ICell> = ({cell,onClick, selected})=>{
    let classes:string|string[] = cell.color === 'white' ? ['cell','white'] : ['cell','black']
    classes = selected ? [...classes, 'selected'].join(' ') : [...classes].join(' ')

    const handle = ()=>{
        onClick(cell)
    }
    return(
        <div className={classes} onClick={handle}
            style = {{background: cell.available && cell.figure ? 'rgb(18, 255, 125)' :''}}
        >
            {!cell.figure && cell.available && <div className="available"></div>}
            {cell.figure?.logo && <img src={cell.figure.logo}></img>}
        </div>
    )
}

export default CellComponet