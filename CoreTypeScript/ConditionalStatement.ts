// Define Condirional Statement - 
// Types - if, if..else, else if, switch

// If Statement:

// var age:number = 5;

// if(age === 18 ){

//     console.log('The person Eligible For voting in india')

// } else{

//     console.log('This is the message for the condition  - Except the if condition provided')

// }


// var time:number = 12

// if(time >12){

//     console.log('Hey tis is a morning time or AM')

// }

//  else if(time <12){

//     console.log('Hey this is a evening time or PM')
// }
// else{

//     console.log('This is the condition Except bove both the condition')

// }


// Switch Case Syntax

// let day:string = "Friday";

// switch(day){

//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Tuesday":
//         console.log("This is TueDaya");
//         break;
//     default:
//         console.log("Invalid Day")

// }


// let day1:number = 10;

// switch(day1){

//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("This is TueDaya");
//         break;
//     default:
//         console.log("Invalid Day")

// }


let env:String = "Prod"

switch(env){
    case "DEV":
        console.log("Run the code in  DEV environment");
        break;
    case "QA":
        console.log("Run the code in QA environment");
        break;
    case "UAT":
        console.log("Run the code in UAT Environemtn");
        break;
    case "Prod":
        console.log("Run the code in Prod");
        break;
    default:
        console.log("Hey this is a invalid Environment")


}
