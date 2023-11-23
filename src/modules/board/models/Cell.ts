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

    isVerticalEmpty(target:Cell){
        const min = Math.min(this.y, target.y)
        const max = Math.max(this.y, target.y)
        if(this.x !== target.x){
            return false
        }
        for( var i = min + 1; i < max; i ++){
            if(!this.board.getCell(this.x, i).isEmpty()){
                return false
            }
        }
        return true
    }

    isHorizontalEmpty(target:Cell){
        const min = Math.min(this.x, target.x)
        const max = Math.max(this.x, target.x)
        if(this.y !== target.y){
            return false
        }
        for( var i = min + 1; i < max; i ++){
            if(!this.board.getCell(i,this.y).isEmpty()){
                return false
            }
        }
        return true
    }
    isDiagonalEmpty(target:Cell){
        const absY = Math.abs(this.y-target.y)
        const absX = Math.abs(this.x-target.x)

        if( absX !== absY){
            return false
        }
        const dx = this.x < target.x ? 1 : -1
        const dy = this.y < target.y ? 1 : -1

        
        for(var i = 1 ; i < absX; i ++){
            if(!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()){
                return false
            }
        }
        return true
    }
}