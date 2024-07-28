
//basic recursion
function factorial(n){
  if(n==1) return 1;
  return n*factorial(n-1);
}
console.log(factorial(2));//2
console.log(factorial(3));//6
console.log(factorial(5));//120
console.log(factorial(6));//720


function fibonacii(n){
  if(n==0) return 1;
  if(n==1) return 1;
  return fibonacii(n-1)+fibonacii(n-2);
}
console.log(fibonacii(5));//8

//recursion with arrays

function sumArray(arr){
  if(arr.length==0) return 0;
  return arr[0]+sumArray(arr.slice(1));
}

console.log(sumArray([1,2,3,4]))//10


function maxArray(arr) {
  if(arr.length==1) return arr[0];
  return Math.max(arr[0],maxArray(arr.slice(1)));
}
console.log(maxArray([1,2,3,4]))//4


//string manioulation
function reverseString(str){
  if(str.length==1) return str[0];
  return reverseString(str.slice(1))+str[0];
}
 

console.log(reverseString("hello"))//olleh


function palindrome(str) {
  if(str.length==1) return true;
  if(str.length==2) return str[0]==str[1];
  if(str[0]==str.slice(-1)) return palindrome(str.slice(1,-1));
  return false;
   
}

console.log(palindrome("racecar"))


//recursive search
function binarysearch(arr,element){
  if(arr.length==0) return false;
  let mid=Math.floor(arr.length/2); 
  if(arr[mid]==element) return true;
  if(arr[mid]>element) return binarysearch(arr.slice(0,mid),element);
  if(arr[mid]<element) return binarysearch(arr.slice(mid+1),element);
  
}
console.log(binarysearch([1,2,3,4,5],5))

function countOccurance( arr,element){
   if(arr.length==0) return 0 ;
   if(arr[0]==element) return 1+countOccurance(arr.slice(1),element);
  return   countOccurance(arr.slice(1),element);
}
  console.log(countOccurance([1,2,3,4,5,5,5],5))


  //tree traversal

  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Inorder traversal (left, root, right)
  function inorder(node) {
    if (node === null) return;
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
  }
  
  // Preorder traversal (root, left, right)
  function preorder(node) {
    if (node === null) return;
    console.log(node.value);
    preorder(node.left);
    preorder(node.right);
  }
  
  // Postorder traversal (left, right, root)
  function postorder(node) {
    if (node === null) return;
    postorder(node.left);
    postorder(node.right);
    console.log(node.value);
  }
  
  // Create a sample binary tree
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  console.log("Inorder traversal:");
  inorder(root);
  
  console.log("Preorder traversal:");
  preorder(root);
  
  console.log("Postorder traversal:");
  postorder(root);


  function calculatedepthofBinarytree(node){
    if(node==null) return 0
    return 1+Math.max(calculatedepthofBinarytree(node.left),calculatedepthofBinarytree(node.right))
 
  }
 
  console.log(calculatedepthofBinarytree(root)) 