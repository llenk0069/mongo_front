import { Cell } from "./Cell";
import { Pawn } from "./figures/Pawn";

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
}