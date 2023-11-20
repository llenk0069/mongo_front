import { Figure } from "../Figure";
import whitelogo from "../../style/Assets/white-rook.png"
import blacklogo from "../../style/Assets/black-rook.png"

import { Cell } from "../Cell";


export class Rook extends Figure{
    constructor(cell:Cell, color:'black'| 'white'){
        super(cell, color)
        this.logo = color === 'white' ? whitelogo : blacklogo
    }

    canMove(target: Cell): boolean {
        if(this.cell.isVerticalEmpty(target)){
            return true
        }
        if(this.cell.isHorizontalEmpty(target)){
            return true
        }
        return false
    }
}