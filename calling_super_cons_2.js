function Shape(color){
    this.color = color
}
Shape.prototype.draw = function(){
    console.log('Drawing.....')
}

const s = new Shape()

function Circle(name,color){
    Shape.call(this,color)
    this.name = name
}

Circle.prototype = Object.create(Shape.prototype)

const c = new Circle("Circle","Red")















// ____INTERMEIATE FUNCTION_____ 
// function extend(Child,Parent){
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child
// }


// function Shape(name){
//     this.name = name
// }
// Shape.prototype.draw = function(){
//     console.log('Drawing.....')
// }

// const s = new Shape("Shape")

// function Circle(name){
//     this.name = name
// }

// //  Circle.prototype  = Object.create(Shape.prototype)

// extend(Circle,Shape)

//  Circle.prototype.duplicate = function(){
//     console.log("Duplicate....")
//  }
// const c = new Circle("Circle")


// function Square(name){
//     this.name = name;
// }

// extend(Square,Shape)

// const sq = new Square("Square")




// ------------CALLING FROM INNER---------- 

// function Circle(name){
//     this.name = name
//     this.move = function(){
//         console.log("Moving...")
//     }
// }

// Circle.prototype.draw = function(){
//     console.log("Drawing...")
//     this.move()
   
// }
// const c = new Circle("Circle")

