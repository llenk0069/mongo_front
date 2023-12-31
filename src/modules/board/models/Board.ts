import { Cell } from "./Cell";
import { Bishop } from "./figures/Bishop";
import { Pawn } from "./figures/Pawn";
import { Rook } from "./figures/Rook";

export class Board{
    cells:Cell[][] = []
    
    public initCells = ()=>{
        for(var i = 0; i < 8; i++){
            const row = []
            for(var j = 0; j < 8; j++){
                if((i + j) %2 != 0){
                    row.push(new Cell(this,j,i,'black')) 
                }else{
                    row.push(new Cell(this,j,i,'white'))
                }
            }
            this.cells.push(row)
        }
    }

    highLightCells(cell:Cell|null){
        for(var i = 0; i <= 7; i++){
            for(var j = 0; j <= 7; j++){
                const target = this.cells[j][i]
                target.available = !! cell?.figure?.canMove(target)
                // if(cell.figure?.canMove(target)){
                //     target.available = true
                //     console.log(target)
                // }
                // else{
                //     target.available = false
                // }
            }
        }
    }

    public getCell(x:number, y:number){
        return this.cells[y][x]
    }

    public addPawns(){
        for(var i = 0; i <= 7; i++){
            new Pawn( this.getCell(i,1),'black')
        }

        for(var i = 0; i <= 7; i++){
            new Pawn( this.getCell(i,6),'white')
        }
    }

    public addRooks(){
        new Rook(this.getCell(0,7),'white')
        new Rook(this.getCell(7,7),'white')
    }

    public addBishop(){
        new Bishop(this.getCell(2,7),'white')
        new Bishop(this.getCell(5,7),'white')
    }
}
