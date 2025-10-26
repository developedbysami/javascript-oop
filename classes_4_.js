// class Declaration

class Circle{
    // To initiate the object 
    constructor(radius){
        //instance members will be here
        this.radius = radius
    }
    // prototype members will be here 
    draw(){
        console.log('drawing...')
    }
}

const c = new Circle(4)

// class expresssion and remember both are not hoisted
const square = class Square{
    static abs(){
        console.log('abs')
    }
}

square.abs()
// square is class not object look it class expression


/// Static Methods
// Static methods are avalaible in the classes not the instace of the class which is called ojbect okay