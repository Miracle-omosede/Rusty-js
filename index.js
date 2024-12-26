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



// ES6 Key concepts
// Logical &&

function getName(name) {
    return name;
}

// console.log(getName('Miracle Sadu'))

// it will check  the two values if the first is true it will run the second else it wouldn't move to the second 

// Logical || one has to be true

// Template literals 

const PeoplesArray = [
    {
        name: "Anna Flickr",
        age: 25,
        country: "Nigeria",
        isMarried: {
            value: true,
            spouse: "Behingham"
        }
    },
    {
        name: "Anna Flickr",
        age: 25,
        country: "Nigeria",
        isMarried: {
            value: true,
            spouse: "Behingham"
        }
    },
    {
        name: "Victoria Jestins",
        age: 25,
        country: "Kenya",
        isMarried: {
            value: true,
            spouse: "Behingham"
        }
    },
    {
        name: "Benard berkline",
        age: 25,
        country: "Nigeria",
        isMarried: false,
        gender: "male"
    },
    {
        name: "Benard berkline",
        age: 25,
        country: "Nigeria",
        isMarried: false,
        gender: "male"
    },
]


// here's a quick task for today, create an array of people some are single some are married match two random single people together, and the man should be older, and it should be a cross gender too 