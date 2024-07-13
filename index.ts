

// // step05b_object_aliased

// // Anonymous Object Types
// let teacher: { name: string, expense: number } = {
//     name: "Samad",
//     expense: 100
// }


// // Aliased Object Types
// // An aliased object type uses the type keyword to create a reusable type definition.

// // defining a type for an object
// type Student = {
//     name: string,
//     age?: number
// }

// // define a variable then  assign the type  then the object
// let student : Student = {
//     name: "Samad",
//     age: 28
// }

// // define a variable then  assign the type  then the object
// let student2 : Student = {
//     name: "marya",
//     age: 24

// }

// console.log(student["name"]) // output: Samad 
// console.log(student.age) // output: 20

// console.log(student2.age) // output: 20
// console.log(student2["name"]) // output: mary


// Interfaces

// An interface is similar to a type alias but is specifically used for describing the shape of objects. Interfaces can also be extended and implemented.

// defining a type for an object
interface Manager {
    name?: string,
    subordinate?: number
}

let generalManager: Manager = {
    name: "Samad"
}

let manager: Manager = {    
    name: "marya",  
    subordinate: 10
}

// Anonymous Object Type
let teacher: { name: string, exp: number } = {
    name: "marya",
    exp: 10
}

// Aliased Object Type
type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "Samad",
    age: 20
}


// Interface
interface Managera {
    name: string,
    subordinates?: number
}

let storeManager: Managera = {
    name: "marya"
}

