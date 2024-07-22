
//activity-1:if-else

function control(a){
  if(a>0) {
    console.log(`the number is positive:${a}`)
  }
  if(a<0) {
    console.log(`the number is negative:${a}`)
  }
  if(a==0) {
    console.log(`the number is zero:${a}`)
  }
}

control(0)

let age=18;
if(age>=18) {
  console.log(`your age is${age} so your are eligable for vote`)
}
else {
  console.log(`your age is${age} so your are not eligable for vote`)
}

//activity-2:nested if-else

let a=3,b=4,c=6;
if(a>b && a>c) {
  console.log(`the number ${a} is greater than b and c `)
}
else if(b>a && b>c) {
  console.log(`the number ${b} is greater than a and c `)
}
else {
  console.log(`the number ${c} is greater than a and b `)
}

//activity-3:switch case
let day;
switch(new Date().getDay()) {
  case 1:
    day='Monday';
    break;
  case 2:
    day='Tuesday';
    break;
  case 3:
    day='Wednesday';
    break;
  case 4:
    day='Thurday';
    break;
  case 5:
    day='Friday';
    break;
  case 6:
    day='Saturday';
    break;
  case 7:
  day='Sunday';
       

}
console.log(`today is ${day}`)

let grade;
let score = 80;

switch (true) {
  case (score >= 90):
    grade = 'A';
    break;
  case (score >= 80):
    grade = 'B';
    break;
  case (score >= 70):
    grade = 'C';
    break;
  case (score >= 60):
    grade = 'D';
    break;
  case (score >= 50):
    grade = 'E';
    break;
  default:
    grade = 'F';
}

console.log("Score:", score, "Grade:", grade);


//activity-4:ternary operator
let s=6
 s%2==0? console.log(`the ${s} number is even because the number is divisible by 2`) :console.log(`the ${s} number is odd because the number is not divisible by 2`)


 //activity-5:combined comdition

 let leap=2000;
 if(leap%4==0 && leap%100!=0 || leap%400==0) 
 {
  console.log(`this is leap year:${leap}`)
 }
 else {
  console.log(`this is not leap year:${leap}`)
 }