// step05b_object_aliased
// Anonymous Object Types
var teacher = {
    name: "Samad",
    expense: 100
};
// define a variable then  assign the type  then the object
var student = {
    name: "Samad",
    age: 20
};
// define a variable then  assign the type  then the object
var student2 = {
    name: "mary",
    age: 20
};
console.log(student["name"]); // output: Samad mary
console.log(student.age); // output: 20 20
