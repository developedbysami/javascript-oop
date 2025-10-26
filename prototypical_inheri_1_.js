// let x = {name:"Joshua"}
// const objectBase = Object.getPrototypeOf(x)

// const propertyDescriptor = Object.getOwnPropertyDescriptor(objectBase,"toString")

// console.log(propertyDescriptor) // there the enumerable is set to false that is the 
// reason it was not enumerating while key in 
// we say for in only enumerate on the instance members of the object but the 
// reason it can't enumerate on prototype members is they are set to enumeable fasle


// the enumerable attribute of the property
// toString() is false that is why we can't 
// iterate over it okay

// ___NOTE____ 

// function Circle(radius){
//     this.radius = radius
//     this.draw = function(){
//         console.log("draw the radius")
//     }
// }

// const circle = new Circle(5)

// console.log(Circle.prototype)
// console.log(circle.__proto__)
// console.log(Object.getPrototypeOf(circle))


//So the prototype property of Circle constructor returns the Object taht will be the parent(prototype) of all the objects
// created using Circle constructor 

// Remember Object construtors protototype
// is the root object okay 


// ___PROTOTYPICAL INHERITANCE____ 


// function Circle(radius){
//     this.radius = radius  
// }

// Circle.prototype.draw = function(){
//     console.log("draw the radius")
// }

// const c1 = new Circle(5)
// const c2 = new Circle(2)



// Object.keys RETURNS INSTANCE MEMBERS ONLY 
// FOR IN LOOP RETURNS INSTANCE + PROPTOTYPE 
// MEMBERS
// WE USE OWNPROPERTY FOR INSTANCE IN JS


// DEEP LEVEL 

function Shape(){
    
}

Shape.prototype.draw = function (){
    console.log("Drawing ", this.name)
}

function Circle(radius){
    this.name = "Circle"
    this.radius = radius
   
}

// Circle.prototype = Object.create(Object.prototype)
// Object.create will craete a new Object 
//  and set its Prototype to Object.prototye
//  which is baseObject or root Object



Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

// Circle.prototype = Shape.prototype
const c1 = new Circle(5)


function Square(radius){
    this.name = "Square"
    this.radius = radius
   
}
Square.prototype = Object.create(Shape.prototype)
// Square.prototype = Shape.prototype
const s1 = new Square(5)
