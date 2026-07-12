import student from "./import.ts";

class calce{

    constructor(){

    }

    addition = (a:number, b:number) => {
        return a+b;
    }

    subraction = (a:number, b:number) => {
        return a-b;
    }



}

export default calce;


let localstu = new student()
localstu.details;
localstu.marks;
localstu.parents;
