import { Cell } from "../Cell";
import { Figure } from "../Figure";
import whitelogo from "../../style/Assets/white-bishop.png"
import blacklogo from "../../style/Assets/black-bishop.png"

export class Bishop extends Figure{
    constructor(cell:Cell, color:'white'|'black'){
        super(cell,color)
        this.color = color
        this.logo = color === 'white' ? whitelogo : blacklogo
    }

    canMove(target: Cell): boolean {
        if(this.cell.isDiagonalEmpty(target)){
            return true
        }
        return false
    }
}