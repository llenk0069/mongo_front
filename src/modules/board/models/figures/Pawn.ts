import { Cell } from "../Cell";
import { Figure } from "../Figure";

export class Pawn extends Figure{
    isFirstStep:boolean = true
    constructor(cell:Cell, color:'white'|'black'){
        super(cell,color)
        this.name = 'Pawn'
    }
    canMove(target:Cell):boolean{
        const direction = this.color === 'white' ? -1 : 1
        const firstStepDirection = this.color === 'white' ? -2 : 2
        
        if(target.x === this.cell.x &&
            (target.y === this.cell.y + direction || this.isFirstStep && target.y === this.cell.y + firstStepDirection) ){
            return true
        }

        return false
    }
}