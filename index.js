const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return (this.firstName + " " + this.lastName).toUpperCase
    }
};

// Destructuring in JS
 
function Person (first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person("john", "Cho", 56, "brown");

myFather.job = "structural Engineer";

console.log(myFather)

let text  = `Ino Chika Cho is my favourite duo so far`;
let char = text.substr(4,10)
console.log(char)