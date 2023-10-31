// Q1  : 
// Ans : 

// Q2  : 
// Ans : 

// Q3  : Write a “person” class to hold all the details.
// Ans : 

class Person {
    constructor(name,age,gender,salary){
        this.name   = name;
        this.age    = age;
        this.gender = gender;
        this.salary = salary;
    }
}

const person1 = new Person("vijay",27, "male",20000);
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.salary);

// Q4  : write a class to calculate the uber price.