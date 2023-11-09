class Animal{
    color = 'grey'
    tail = true
    constructor(color,legs,tail){
        this.color = color
    }
}

Animal.prototype.legs = 4

const cat = new Animal('white', true)

console.log(Animal.prototype)
console.log(cat)