// function Circle(radius){
//     this.radius = radius
//     console.log("this: ",this)
//     draw = function(){
//         console.log("draw the radius")
//     }
// }

// const circle =  Circle(5)



// Every Object has a property "constructor" that represents the function that 
// was used to create the object 



// CALL AND APPLY 

// function Circle(radius){
//     this.radius = radius
//     draw = function(){
//         console.log("draw the radius")
//     }
// }

// Circle.call(this,5)
// Circle.apply({},[1,2,3])


// ___ENUMERATION____ 


// function Circle(radius){
//     this.radius = radius
//     this.draw = function(){
//         console.log("draw the radius")
//     }
// }

// const circle =  new Circle(5)

// for (let key in circle) {
//   if (typeof circle[key] !== "function"){
//     console.log(key)
//   }
// }


// ___ABSTRACTION___ 



// function Circle(radius){
    
//     let defaultLocation = {x:"street 12x"}
    
//     this.radius = radius
    
//     this.draw = function(){
//         console.log("draw the radius")
//     }

//     Object.defineProperty(this,"defaultLocation",{
//       get: function(){
//         return defaultLocation
//       },
//       set:function(value){
//         defaultLocation.x = value
//         return defaultLocation
//       }
//     })
// }

// const c = new Circle(3)






// function Circle(radius){
    
  
//   this._radius = radius
  
//   this.draw = function(){
//       console.log("draw the radius")
//   }

//   Object.defineProperty(this,"radius",{
//     get: function(){
//       return this._radius
//     },
//     set:function(value){
//       this._radius = value
//       return this._radius
//     }
//   })
// }

// const c = new Circle(3)










// __PRIVATE PROPERTY__

// class Circle{
//   #radius = 5;
//     constructor(radius){
//       this.#radius = radius
  
//   this.draw = function(){
//       console.log("draw the radius")
//   }
//     }
// }

// const c = new Circle(3)
// c.#radius

