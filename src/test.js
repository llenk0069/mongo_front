function animal(){
    this.color = 'red'
    console.log('I am animal')
    console.log(this)
}
animal.prototype.legs = 4
animal.prototype.tail = true
animal.prototype.color = 'green'

const rat = new animal()

console.log(animal.prototype)
console.log(rat.__proto__)

rat.legs = 3
console.log(rat)

console.log(animal.prototype === rat.__proto__)