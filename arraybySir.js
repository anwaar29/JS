
// function f1(){
//     console.log("this is function")
// }
// f1();

//  anonymos funcrion

// var f2= function(){  // this not consider a function in memory part
//  console.log("this is  anonymus function")
// }
// console.log (f2); // function defintion;
// f2();

// arrow function
// var f5 = () => {
// console.log(" this is arrow function");
// }
// console.log(f5);
// f5();

// arrow function and anonymous fn are not hoisted

// var add=(a,b)=>{
//     return a+b;
// }
// console.log(add(4,5)); 
//  or  jb ek return ho bss to parathesis ke bina bhi kh skte h
 //var add=(a,b)=>a+b; 
 // console.log(add(4,5));
  // var add=(n)=>a*n //in case of one parameter you can remove function symbol also ()
// }



////// ****array***** 
// var arr=["gh","hg",1,2,[4,5,6]]
// console.log(arr);
// console.log(arr[4][2]); // acces array in inside array 
// console.log(arr.length);
// console.log(arr[4].length);

// push= adds elemnt to the end of the arrae nd return the new lenth of the array
// let res=arr.push(5);
// console.log(res) // jo element add kiya gya h usko add krke usi ko return bhi krkta h
// console.log(arr);
// console.log(arr.length);
//  arr.pop(); // last element ko remove krega or us return wale element ko  return bhi krta hai
//  console.log(arr);

 // fruits = ['apple', 'banana', 'orange', 'kiwi','banana']
//  fruits.pop();
//  console.log(fruits)
//  console.log(fruits.pop())
//  console.log(fruits)
//  console.log(fruits.push('strawberry'))
//  console.log(fruits.push('melon'))
//  console.log(fruits)
// console.log(fruits.shift()) 
//   console.log(fruits) 
//   let kk=fruits.unshift(fruits);
//   console.log(kk);
// index of= returns the first index at which agiven element occurse
//  let  result=fruits.indexOf('banana');
//  let  result1=fruits.indexOf('banana',2);
//  console.log(result);
//  console.log(result1);

 // slice == return the partiton copy of array
  // it take 2 argument startand end nd return the
//   let res= fruits.slice(1,3); // ending index is not incluted
//   console.log(res); // slice copy of fruits array
//   console.log(fruits); // this will remain original
//   let res2=fruits.slice(2);// jab ek argument denge to ye start smjhega or end tak jaayega
//   console.log(res2);
//   console.log(fruits.slice(-4));
   



let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']

console.log(fruits.push('strawberry', 'papaya', 'pear'))
console.log(fruits.pop())
console.log(fruits.shift())
console.log(fruits.unshift('jackfruit'))
let result = fruits.slice(0, 3)
console.log(result)
