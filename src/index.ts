class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// interface Human {
//     name: string;
//     age: number;
//     gender?: string;   
// }

// const person = {
//     name: "taylor",
//     age: 38,
//     gender: "male"
// }

const person = new Human("taylor", 28, "male");
        
const sayHi = (person: Human) => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}
console.log( sayHi(person) );

export {};