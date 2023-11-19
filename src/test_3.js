class Figure{
    cell
    name
    color
    constructor(cell, color){
        this.cell = cell
        this.cell.figure = this
        this.name = 'Figure'
        this.color = color
    }
}
Figure.prototype.a = 'figure'



class Pawn extends Figure{
    isFirstStep = true
    constructor(cell, color){
        super(cell,color)
        this.name = 'Pawn'
    }
}
Pawn.prototype.b = 'pawn'



class WhitePawn extends Pawn{
    constructor(cell,color){
    super(cell,color)
    this.name = 'WhitePawn'
    }
}
WhitePawn.prototype.c = 'white_pawn'



const i = new Pawn({},'red')
const j = new WhitePawn({},'white')


console.log(i.__proto__)
console.log(j.__proto__)
console.log(j.__proto__.__proto__.__proto__)

console.log(j.a, j.b, j.c)