// function Circle(){
//     this.draw = function(){
//         console.log(this)
//     }
// }

// const c = new Circle

//  Method call
// c.draw()

// const draw = c.draw

//  Function Call
// draw()

// when the function is called as standalone 
// function this will be the global object 
// which is window in browers 


// and if we call method as a function in strict mode it will return undefined 
// because it will avoid to make changes on global objects 



// THIS IN CLASSES

// class Circle{
//     draw(){
//         console.log(this)
//     }
// }

// const c = new Circle 

// c.draw()

// const draw = c.draw

// draw() // will return undefined bc classes by default runs in strict mode



// _______________________________ 

// let ninja = {
//     name:"Yoshi",
//     skills:"assasination",
//     kills(){
//         console.log(this)
//     }
// }

// var a = ninja.kills // let and const are not attached to window object okay
// window.a()




// _____BINDING_____

// function talk(){
//     console.table(`${this.name} talks...`);
// }

// const me = {
//     name:"Sami Alvi"
// }
// const muezza = {
//     name:"Muezza"
// }
// const bilu = {
//     name:"Bilu"
// }

// Function.prototype.bind -> Returns a function binded with the context
// const userTalk = talk.bind(bilu)
// userTalk()

// Or you can use Call or Apply they call the function right away not creates another
// function

// talk.call(me)



// ___THIS WITH CONSTRUCTOR___ 

// function Person(){
//     this.name = "Sami"
//     console.log("Here is this ", this)
// }

// const p = new Person() 
// he says the this is binded with the object that is created
// using new okay - thats the reason this was pointing to right object





function Person(){
    this.name = "Sami"
    // setTimeout(function(){
    //     console.log(this)
    // }.bind(this),100) // this is the context this {name:"sami"}
    //or the solution is arrow function 
    setTimeout(()=>{
        console.log(this)
    },100) 
}

const p = new Person() 
const p1 = new Person() 
