// class Shape{
//     constructor(color){
//         this.color = color
//     }

//     move(){
//         console.log("Move")
//     }
// }

// class Circle extends Shape{
//     constructor(color,radius){
//     super(color)
//     this.radius = radius
//     }
//     draw(){
//         console.log("Drawing...")
//     }
// }

// const c = new Circle("Green",4)




// METHOD OVERRIDING

class Shape{
   
    move(){
        console.log("Move")
    }
}

class Circle extends Shape{
    
    move(){
        super.move()
        console.log("Circle Move")
    }
}

const c = new Circle()