// Use of static methods / properties

// class User{
//     static id = 1;
//     constructor(name,age){
//         this.name = name
//         this.age = age 
//         this.id = User.id++
//     }

//     static sortUsers(users){
//         users.sort((a,b)=>a.age - b.age)
//     }
// }

// const user1 = new User("Sami",24)
// const user3 = new User("Jane Cash",33)
// const user2 = new User("Yoshi",52)

// const users = [user1, user2, user3]
// User.sortUsers(users)
// console.log(users)



// ___________________________________________________________________ 



// 1. static = belongs to the class itself.

// 2. In a static method, this → refers to the class, not the object.

// 3. That’s why this.cache["value"] works inside checkCache().

class Cachee{
     static cache = {
        value:"some string"
    }
    constructor(name){
        this.name = name
    }

    // static block which will run 1st time when calling a static method

    static{
        console.log("initialized") // puprose is pretty self explanatory here why would we need it
    }

    static checkCache(){
        console.log(this.cache["value"]) //Inside a static method, the keyword this refers to the class, not any instance.
    }
}
Cachee.checkCache()


const c = new Cachee("cache")