import calce from "./export.ts"

let addtwo = new calce();// instance 
console.log(addtwo.addition(10,20));
console.log(addtwo.subraction(10,34));

console.log(5+4);

class student{

    details=()=>{
        console.log("Hey i am a student details")
    }
    marks=()=>{
         console.log("Hey i am a student Marks")

    }
    parents=()=>{
          console.log("Hey i am a student Parens")

    }


}

export default student;




