class Animal{
    color = 'grey'
    tail = true
    constructor(color,legs,tail){
        this.color = color
    }
}

class Bird extends Animal{
    constructor(color){
        super(color)
    }
    move(){
        console.log('hi')
    }
}



Animal.prototype.legs = 4
Bird.prototype.wings = 2

const cat = new Animal('white', true)
const parrot = new Bird('red')
console.log(Bird.__proto__.prototype)
console.log(Animal.prototype)

console.log(parrot)
console.log(cat)