//activty-1:creating an array

const arr=[1,2,3,4,6]
for(let i=0;i<arr.length-1;i++) {
  console.log(`the index is ${i} and the value is ${arr[i]}`)
}

console.log(arr[0])//1
console.log(arr.length-1);//4

//activty-2:array methods(basic)
const arr1=[1,2,3,4,6]
arr1.push(6);
console.log(arr1);//[ 1, 2, 3, 4, 6, 6 ]
arr1.pop();
console.log(arr1);//[ 1, 2, 3, 4, 6 ]
arr1.shift(1);
console.log(arr1);//[ 2, 3, 4, 6 ]
arr1.shift(4)
console.log(arr1);//[ 3, 4, 6 ]
arr1.shift(3)
console.log(arr1);//[ 4, 6 ]
arr1.unshift(1,2,3)
console.log(arr1);//[ 1, 2, 3, 4, 6 ]

//activity-3:array methods(intermediate)
const newarr=arr1.map((a)=> 
{return a*a}
   )
console.log(newarr);//[ 1, 4, 9, 16, 36 ]

const filtereven=newarr.filter(checknum);
function checknum(newarr) {
  return newarr%2==0;
}
console.log(filtereven)//[ 4, 16, 36 ]

const words = [1,2,3,4];

const result = words.filter((word) => word%2!=0);

console.log(result);//[ 1, 3 ]

const arr3=[345,432,23,34,54,65,67,78];
const intialvale=0;
const sumofarr3=arr3.reduce((prevVal,currVal)=>prevVal+currVal,0)
console.log(sumofarr3);//1098

//activity-4:array iteration

const forarr=[1,2,3,4,5];
for(let i=0;i<forarr.length;i++) {
  console.log(`the index is ${i} and the value is ${forarr[i]}`)
}
forarr.forEach(arr => {
  console.log(` foreach method::: the value is ${arr}`)
});

//activity-5:multidimensional aray

// Creating a 2-dimensional array
let multiDimArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements in a 2-dimensional array
console.log(multiDimArray[0][0]); // Output: 1
console.log(multiDimArray[1][2]); // Output: 6

// Modifying elements in a 2-dimensional array
multiDimArray[2][1] = 10;
console.log(multiDimArray[2][1]); // Output: 10

// Iterating over a 2-dimensional array
for (let i = 0; i < multiDimArray.length; i++) {
  for (let j = 0; j < multiDimArray[i].length; j++) {
      console.log(multiDimArray[i][j]);
  }
}
