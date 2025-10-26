// Every Object has a propery constructor
// PROTOTYPAL INHERITANCE 

// function Circle(radius){
//     this.radius = radius;

// }
// Circle.prototype.getRadius = function(){
//     console.log("radius...", this.radius)
// }

//if you don't want enumeration on this property

// function Circle(radius) {
//     this.radius = radius;
//   }
  
//   Object.defineProperty(Circle.prototype, "getRadius", {
//     value: function () {
//       console.log("radius...", this.radius);
//     },
//     enumerable: false, // 👈 hides it from for...in
//     writable: true,
//     configurable: true
//   });
  

// const c = new Circle(5)

// console.log(Object.keys(c)) // instance members only not prototype




// function Shape(){
    
// }

// Shape.prototype.draw = function(){
//     console.log("Drawing...")
// }

// function Circle(radius){
//     this.radius = radius 
// }

// Circle.prototype = Object.create(Shape.prototype) 
// so it will be like {prototype:shapePrototype Object}
// Circle.prototype.constructor = Circle
// const c = new Circle(5)
//  it will create an object whose prototype would be the given object





// __COMPOSITION___ 

// const canEat = {
//     eat(){
//         this.hunger--
//         console.log('eating...')
//     }
// }

// const canWalk = {
//     walk(){
//         console.log("walking...")
//     }
// }

// function Person(){
//     this.hunger = 10;
// }


// function mixins(target,...sources){
//     Object.assign(target.prototype,...sources)
// }
// mixins(Person,canEat,canWalk)
// const p = new Person;




// ___CLASS DECLARATION AND EXPRESSION BOTH ARE NOT HOISTED AND RUN IN STRICT MODE___ 

// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }
//     draw(){
//         console.log("drawing...")
//     }
//     static abs(){
//         console.log('static method is called on the class')
//     }
// }

// const c = new Circle(2)

// Circle.abs()


function Circle(radius){
    this.radius = radius

}
// Circle.prototype

Object.defineProperty(Circle.prototype,'getRadius',{
    value:function(){
        console.log(`Radius of this circle is ${this.radius}`)
    },
    enumerable:false,
    writable:false,
    configurable:false,
})


const c = new Circle(5)