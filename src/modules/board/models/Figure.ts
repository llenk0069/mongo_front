import { Cell } from "./Cell";

export class Figure{
    cell:Cell
    name:string
    color:string
    
    constructor(cell:Cell, color:'black'| 'white'){
        this.cell = cell
        this.cell.figure = this
        this.name = 'Figure'
        this.color = color
    }

    canMove(target:Cell){
        if(this.color === target.figure?.color){
            return false
        }
        if(target.figure?.name === 'king'){
            return false
        }
        return true
    }
}