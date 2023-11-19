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

    setFigure(figure:Figure){
        figure.cell = this
        this.figure = figure
    }
    moveFigure(target:Cell){
        if(this.figure && this.figure.canMove(target)){
            this.figure.move()
            target.setFigure(this.figure)
            this.figure = null
        }
    }
    isEmpty(){
        return this.figure ? false : true
    }
    isEnemy(target:Cell){
        if(target.figure){
            if(this.figure?.color !== target.figure?.color){
                return true
            }
        }
        return false
    }
}