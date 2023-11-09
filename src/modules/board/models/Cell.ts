export class Cell{
    readonly x:number;
    readonly y:number;
    color:string;
    id: number;
    figure:object|null;
    available:boolean;
    
    constructor(x:number,y:number,color:"black"|"white"){
        this.x = x
        this.y = y
        this.id = Math.random()
        this.color = color
        this.figure = null
        this.available = false
    }
}