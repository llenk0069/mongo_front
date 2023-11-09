import { FC } from "react";
import CellComponet from "../modules/board/components/cell";
import { Cell } from "../modules/board/models/Cell";

const BoardPage:FC =()=>{
    const firstCell = new Cell(1,2,'black')
    return(
        <div>
            <CellComponet cell={firstCell} selected = {true}/>
        </div>
    )
}

export default BoardPage