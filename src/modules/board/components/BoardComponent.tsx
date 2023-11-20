import { FC, useState, ReactNode, ReactChildren, ReactChild, useEffect } from "react";
import {Board } from "../models/Board";
import { Cell } from "../models/Cell";
import CellComponet from "./CellComponent";
import '../style/style.css'

interface IBoard{
    board:Board
}

const BoardComponent:FC<IBoard> = ({board})=>{
    const [ActiveCell, setActive] = useState<Cell|null>(null)
    const click = (cell:Cell)=>{
        if(ActiveCell && ActiveCell !== cell && ActiveCell.figure?.canMove(cell)){
            const figure = ActiveCell.figure
            ActiveCell.moveFigure(cell)
            setActive(null)
            board.highLightCells(cell)
        }else{
            setActive(cell)
            board.highLightCells(cell)
            cell.isVerticalEmpty(cell)
        }
    }

 useEffect(()=>{
    // board.highLightCells(ActiveCell)
    // console.log(ActiveCell)
    // console.log('change')
 },[ActiveCell])

    console.log(ActiveCell)
    return(
        <div className="board">
            {board.cells.map((i,index)=>
                i.map((j,index)=>
                    <CellComponet 
                        cell={j} 
                        key={j.id} 
                        onClick={click}
                        selected={ActiveCell?.x===j.x && ActiveCell.y === j.y}/>
                )
            )}
        </div>
    )
}

export default BoardComponent