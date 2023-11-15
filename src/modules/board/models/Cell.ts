import { Board } from "./Board";
import { Figure } from "./Figure";

export class Cell{
    readonly x:number;
    readonly y:number;
    color:string;
    id: number;
    figure:Figure|null;
    available:boolean;
    board:Board
    
    constructor(board:Board,x:number,y:number,color:"black"|"white"){
        this.board = board
        this.x = x
        this.y = y
        this.id = Math.random()
        this.color = color
        this.figure = null
        this.available = false
    }
}