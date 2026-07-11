// Loops - forloop, while loop, do while loop, for of , for each , for in , array for each loop

// for(let i =3; i<=10; i++){
//     console.log(i)
//     if(i==3){
//         console.log("Hey you reached the limit of order three")
//        break;
//     }   

// }

// for...of

// var fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits.length)

// for(const fruit of fruits){
//     console.log(fruit);
//     if(fruit==="Fig"){
//         console.log("Fig available in the provided arrary")
//     }else{
//         console.log("Hey ther is no Fig")
//     }

// }

//  for....in

// var person = {

//     name: "Mythili",
//     age:35
// }

// for(const key in person){
//     console.log(key,person[key as keyof typeof person ])

// }

// let number = [10, 34, 56, 89, 90];

// console.log(number[4])


// input = "Bhuvana";
// Output = "anavuhB"

const str:string = "Bhuvana";
console.log(str.length);

var reversed:string = "";

for(let i=str.length-1; i>=0; i--){
    reversed +=str[i];
   // reversed = reversed+str[i];
}
console.log(reversed)