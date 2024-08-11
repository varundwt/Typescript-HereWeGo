//Whenever we set a type to a variable we can only use the methods associated with it.

//In case of a number we get methods like .toFixed or toPrecision 
let userId: number = 22;

//In case of a boolean we get only .valueOf method which is associated with boolean values only.
let isLoggedIn : boolean = false

//It is also not a good practice to over use the type assignment to every variable.
//even though if we do not assign a type to a variable in typescript, it is smart
//enough to know what type your variable is and automativally tie it to that data type.
//This is called Type Inference.

// TypeScript Inference defines that TypeScript will automatically detect variables data type, 
// functions return type, Object types, Array Types, etc.

let myVariable = 10;
// myVariable = "varun"

//Here if we have assigned a string to a variable which is number without setting a type to it
//and TS still throws'Type 'string' is not assignable to type 'number'' error. 

//So just because its has an ability to tie a type to a variable,
//doesn't mean it must be a standard practice.