import { Cell } from "../Cell";
import { Figure } from "../Figure";

export class Pawn extends Figure{
    constructor(cell:Cell, color:'white'|'black'){
        super(cell,color)
        this.name = 'Pawn'
    }
    canMove(target:Cell):boolean{
        const direction = this.color === 'white' ? 1 : -1
        if(target.x === this.cell.x && target.y === this.cell.y + direction ){
            return true
        }

        return false
    }
}