//___MIXINS____

function mixin(target,...sources){
    Object.assign(target,...sources)
}

const canEat = {
    eat(){
        this.hunger--
        console.log('eating...')
    }
}

const canWalk = {
    walk(){
        console.log("walking...")
    }
}

//  now we will compose an object having these methods



// const person = Object.assign({},canEat,canWalk)


function Person(){
    this.hunger = 1
}
mixin(Person.prototype,canEat,canWalk)
const person = new Person


