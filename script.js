// Q1  : https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// Ans : 

class Movie {
    constructor(title,studio,rating = "PG"){
        this.title  = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const movie1 = new Movie("Casino Royale","Eon Productions","PG13")
console.log(movie1.title);
console.log(movie1.studio);
console.log(movie1.rating);
const movie2 = new Movie("LEO","7 studios","PG17");
console.log(movie2.title);
console.log(movie2.studio);
console.log(movie2.rating);

// Q2  : https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
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
// Ans :

