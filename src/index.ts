const sayHi = (Name: string, Age: number, Gender?: string): string => {
    return `hello ${Name}, you are ${Age}, you are a ${Gender}`;
}
console.log( sayHi("taylor.baek", 38, "male"));

export {};