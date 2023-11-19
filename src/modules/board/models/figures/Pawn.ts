import { Cell } from "../Cell";
import { Figure } from "../Figure";
import whitelogo from "../../style/Assets/white-pawn.png"
import blacklogo from "../../style/Assets/black-pawn.png"

export class Pawn extends Figure{
    isFirstStep:boolean = true
    constructor(cell:Cell, color:'white'|'black'){
        super(cell,color)
        this.name = 'Pawn'
        this.logo = color === 'white' ? whitelogo : blacklogo
    }
    canMove(target:Cell):boolean{
        const direction = this.color === 'white' ? -1 : 1
        const firstStepDirection = this.color === 'white' ? -2 : 2
        
        if(target.x === this.cell.x &&
            (target.y === this.cell.y + direction || this.isFirstStep && target.y === this.cell.y + firstStepDirection)&&
            (target.isEmpty())){
            return true
        }
        if(this.cell.isEnemy(target) && (target.x == this.cell.x + 1||target.x == this.cell.x - 1)  && target.y == this.cell.y + direction){
            return true
        }

        return false
    }

    move(){
        super.move()
        this.isFirstStep = false
    }
}