import { FC, useState, ReactNode, ReactChildren, ReactChild } from "react";
import {Board } from "../models/Board";
import { Cell } from "../models/Cell";
import CellComponet from "./CellComponent";
import '../style/style.css'

interface IBoard{
    board:Board
}

const BoardComponent:FC<IBoard> = ({board})=>{
    const [Active, setActive] = useState<Cell|null>(null)
    console.log(Active)
    return(
        <div className="board">
            {board.cells.map((i,index)=>
                i.map((j,index)=>
                    <CellComponet 
                        cell={j} 
                        key={j.id} 
                        onClick={setActive}
                        selected={Active?.x===j.x && Active.y === j.y}/>
                )
            )}
        </div>
    )
}

export default BoardComponent