interface Human {
    name: string;
    age: number;
    gender?: string;   
}

const person = {
    name: "taylor",
    age: 38,
    gender: "male"
}
        
const sayHi = (person: Human) => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}
console.log( sayHi(person) );

export {};