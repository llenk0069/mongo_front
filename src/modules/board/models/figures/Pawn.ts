import { Cell } from "../Cell";
import { Figure } from "../Figure";

export class Pawn extends Figure{
    constructor(cell:Cell, color:'white'|'black'){
        super(cell,color)
        this.name = 'Pawn'
    }
}