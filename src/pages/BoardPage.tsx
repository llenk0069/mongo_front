import { FC } from "react";
import BoardComponent from "../modules/board/components/BoardComponent";
import { Board } from "../modules/board/models/Board";

const BoardPage:FC =()=>{
    const gameBoard = new Board()
    gameBoard.initCells()
    gameBoard.addPawns()
    console.log(gameBoard.cells)

    return(
        <div>
            <BoardComponent board={gameBoard}/>
        </div>
    )
}

export default BoardPage