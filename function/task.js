//activity-1:function declaration
function checkthenumber(a) {
   if(a%2==0) {
    console.log(`the number is even `)
   }
   else {
    console.log(`the number is odd `)
   }
}
function findthesquare(a) {
   let numsq=a*a;
     console.log(`the square of ${a} is ${numsq}`)
}

checkthenumber(7);
findthesquare(4);

//activity-2:function expression

const maximumnum=function(a,b) {
  if(a>b) {
    console.log(`the number a is greater than b `)
  }
  else {
    console.log(`the number b is greater than a `)
  }
}

maximumnum(3,4);

const concatStrings = function(str1, str2) {
  return str1 + str2;
};


let result = concatStrings("Hello, ", "Priyanshu");
console.log(result); 

//activity-3:Arrow Function

const sum=(a,b)=>{
  return a+b;
}
 let res=sum(4,5);
console.log(res);


const checkstr=(a)=>{
  if(a==="/" || a=="!" || a=="@" || a=="#" ) {
      return true;
  }
  else {
    return false;
  }

}
let ans=checkstr('/');
console.log(ans);

//activity-4:function parameter

function sumoftwo(a,b){
  return a+b;
}
 let res1=sumoftwo(4,5);
console.log(res1);

function greetings(person,age) {
  console.log(`welecom ${person} and your age now ${age}`)
}
greetings("universe",1000000000000000000);

//activity-5:higher order function-->higher-order functions are functions that can take other functions
//                                    as arguments or return functions as their results

//In the perform function, we pass two numbers (a and b) and another function (operation) as arguments.
//Inside peform, we simply call the operation function with x and y and return the result.
//We can pass any function that takes two arguments and returns a value as the operation argument.
//This makes operate a higher-order function
function perform(a,b,operation) {
  return operation(a,b);
}

function mul(a,b) {
  return a*b;
}
console.log(perform(4,5,mul));


function applyFunctions(func1, func2, value) {
  // Apply the first function to the value
  let result = func1(value);
  // Apply the second function to the result of the first function
  result = func2(result);
  // Return the final result
  return result;
}

// Example functions
function double(x) {
  return x * 2;
}

function addThree(x) {
  return x + 3;
}

// Example usage
let value = 5;
let result1 = applyFunctions(double, addThree, value);
console.log(result1); // Output will be 13
