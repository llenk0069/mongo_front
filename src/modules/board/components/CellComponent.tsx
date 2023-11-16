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
        <div className={classes} onClick={handle}>
            {cell.figure && <h5 className="figure ">{cell.figure.name}</h5>}
            {cell.available && <div className="available">x</div>}
        </div>
    )
}

export default CellComponet