///activity-1
for(let i=1;i<=10;i++) {
//  console.log(`the number is ::${i}`);
}

let mul=5;
for(let i=1;i<=10;i++) {
 // console.log(`the number is ::${i*mul}`);
}

//activity-2:while loop

let i=1;
while(i<=10) {
 //  console.log(`the number is ::${i}`);
   i++;
}


let i3=1;
while(i3<=10) {

 //  console.log(`the number is ::${i3*5}`);
   i3++;
}

//activity-3:do while loop

let i4=1;
do{
 // console.log(`the number is ::${i4}`);
  i4++;
}
while(i4<=5)

let fac=1;
let n=5;
do{
  fac*=n;
  n--
}
while(n!=0)
//console.log(fac)

//activity-4:print a star
let star="";
for(let i=0;i<5;i++) {
  for( let j=0;j<=i;j++) {
    star+="*";
  }
  star+="/n";
}
console.log(star)


//loop control statement

for(let i=1;i<=10;i++) {
  if(i==5) {
    continue;
  }
  
//  console.log(`the number is ${i}`)
}

for(let i=1;i<=10;i++) {
  if(i==7) {
    break;
  }
  
  console.log(`the number is ${i}`)
}