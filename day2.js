// we will comparing the value of the variable dirctly
 // let a=10;
// switch(a){
//     case 10:
//         console.log("value is 10");
//        break;
//        case 15:
//         console.log("value is 15");
//        break;
//     default :
//     console.log("value is not 10");
//     break;
// }
// variable is coming  so u have to put TRUE
  
// switch(true){
//     case (a==10):
//     console.log("true");
//     break;
//     default:
//     console.log("false");
//     break;
// }
// for (let i=0;i<=10;i++)
// {
//     console.log("value is"+i);
// }

 // or u can do this like this 
// let i=0;
// for (; i<=10;i++)
// {
//     console.log("value is"+i);
// }
 // or you can put inc/dec outside from loop like this
//  let i=0;
// for (; i<=10;)
// {
//     console.log("value is"+i);
//     i++;
// }
// let i=0;
// while(i<10){
//     console.log("number is"+i);
//     i++
// }
// console.log("fine");
// you must use  increment  or decrement at the last of while loop 
// you must the condition proprely  otherwise you will get stuck in infinite loop

// do while loop
// let i=0;
// do{
//  console.log("the value of i is "+i);
//  i++;
// }while(i<10);


 // nasted loop
  // it will happend only in for loops

// for(let i=0; i<5; i++){
//     for(let j=0; j<2; j++){
//         console.log("i is"+i ,"and j is: ",j)
//     }
// }


 // function
//  let a=10;
//  let b=12;
//  function add (){ // function definition
//     console.log(a+b);
//  }
//  add(); // function execution
 // function with parseFloatmetr
//   function addtwo(a,b){
//       console.log(a+b);
//   }
//   addtwo(15000,20);
  // arguments : the value which pass to a variable (15000 and 20)
  // parameter : the value  which function use to do the opration (a and b)
 
  // 3 function with return statement
 function set(x,y){
     return x+y; // any code written after return is not accessible
 }
 let res=set(12,13); // coz it  return something so we have to put that result in some variable 
 console.log(res);

  // function which exits only in js
  