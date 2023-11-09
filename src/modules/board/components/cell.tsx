import { FC } from "react";
import { Cell } from "../models/Cell";
import '../style/style.css'

interface ICell{
    cell:Cell
    selected:boolean
    onClick?:(cell:Cell)=>void
}

const CellComponet:FC<ICell> = ({cell, selected})=>{
    let classes:string|string[] = cell.color === 'white' ? ['cell','white'] : ['cell','black']
    classes = selected ? [...classes, 'selected'].join(' ') : [...classes].join(' ')
    return(
        <div className={classes}>

        </div>
    )
}

export default CellComponet