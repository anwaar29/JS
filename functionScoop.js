// if there was a bloack of code that we need to reuse we put inside a function
// function are reusable block of codes
// function abc(){
    // code of block
 //   console.log("inside abc");
// }
// to run the function we have to call function
// abc()// function execution,function caling
 
// function add(a,b){  // parameter
//     console.log(a+b);
// }
// add (5,4);  // arggument

 // function add (a,b){
// return a+b;
  // }
// console.log(add(4,5))
 // var res=add (4,5);
 // console.log(res);

 //  scope
 // where that variable is persent
  function abc(){ // scope of a.b is abc function
      var a=20;
      var b=30;
      console.log(a,b,"inside abc")
    
  }
  var x = 10  // scope of x is global
  abc();
   console.log(a,b,"inside global") // refrence error here we dont have a b
   