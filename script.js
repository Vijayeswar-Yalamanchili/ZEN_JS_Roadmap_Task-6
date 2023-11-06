// Q1  : https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// Ans : 

// class Movie {
//     constructor(title,studio,rating = "PG"){
//         this.title  = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
// }

// const movie1 = new Movie("Casino Royale","Eon Productions","PG13")
// console.log(movie1.title);
// console.log(movie1.studio);
// console.log(movie1.rating);
// const movie2 = new Movie("LEO","7 studios","PG17");
// console.log(movie2.title);
// console.log(movie2.studio);
// console.log(movie2.rating);

// ------------------------------------------------------------------------------------------------------------------------------

// Q2  : https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// Ans : 

// class Circle {
//     constructor(radius, color){
//         this.radius  = radius;
//         this.color = color;
//     }
//     //get & set for radius
//     get radiusCircle(){
//         return this.radius;
//     }
//     set radiusCircle(radius){
//         this.radius = radius;
//     }
//     //get & set for color
//     get colorCircle(){
//         return this.color;
//     }
//     set colorCircle(color){
//         this.color = color;
//     }
//     get toString(){
//         return `"Circle[radius = ${this.radius},color = ${this.color}]"`
//     }
//     get areaCircle(){
//         return Math.PI * Math.pow(this.radius,2);
//     }
//     get circumferenceCircle(){
//         return 2 * Math.PI * this.radius;
//     }
// }
// const circle1 = new Circle(1.0,"red")
// console.log("Assigned radius value is by getting(getter) : " + " " +circle1.radiusCircle);
// console.log("Assigned color value is by getting(getter) : " + " " +circle1.colorCircle);
// console.log(circle1.toString);
// console.log(circle1.areaCircle);
// console.log(circle1.circumferenceCircle);
// circle1.radius = 3;
// console.log("reassigned radius value is by setting(setter) : " + " " +circle1.radiusCircle);
// circle1.color = "blue";
// console.log("reassigned color value is by setting(setter) : " + " " +circle1.colorCircle);

// -------------------------------------------------------------------------------------------------------------------------------

// Q3  : Write a “person” class to hold all the details.
// Ans : 

// class Person {
//     constructor(name,age,gender,salary){
//         this.name   = name;
//         this.age    = age;
//         this.gender = gender;
//         this.salary = salary;
//     }
// }

// const person1 = new Person("vijay",27, "male",20000);
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.gender);
// console.log(person1.salary);

// -------------------------------------------------------------------------------------------------------------------------------

// Q4  : write a class to calculate the uber price.
// Ans :

class Uberprice{
    constructor(km,price=50){
       this.cost = price;
       this.kilometer = km
    }
    get price(){
        return this.kilometer * this.cost;
    }
}
let p1 = new Uberprice(5,60);
let p2 = new Uberprice(5);
p1.cost = 125;
console.log(p1.price);
console.log(p2.price);