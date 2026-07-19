// Objects - An object in TypeScript is a reference type that combines related data and functionality into a single entity. It helps model real-world objects, supports strong typing, and enables better code organization, reusability, and maintainability through compile-time type checking.

// Objects Types - Simple Type, Object with Annotations, Object with optional proprty, Object with redonly property, Object With Method, Function Accepting an Object, Nested Object, Array of Object, Using a type alias

// Simple Object type

let Employeedd = {

    id: 101,
    name:"john"
}

console.log(Employeedd)
console.log(Employeedd.id);
console.log(Employeedd.name)

// Object with type Annotation

let empyoyee: { 
    id: number; 
    name: string 
} 

empyoyee = {
    id: 101,
    name: "maari"
}

// Object with Optional Proprty

let empyoyeee: { 
    id: number; 
    name: string;
    isactive?: boolean;
} 

empyoyeee = {
    id: 101,
    name: "maari"
}

// Readonly property

let empyoyeeee: { 
   readonly id: number; 
    name: string;
    isactive?: boolean;
} 

empyoyeeee = {
    id: 101,
    name: "maari"
}

// Object with method


