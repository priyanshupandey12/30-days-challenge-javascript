//sorting algorithms

function bubbleSort(arr) {
  let n = arr.length;  

  for (let i = 0; i < n - 1; i++) {
      // Flag to check if any swapping happened in this pass
      let swapped = false;

   
      // Last i elements are already in place, so no need to compare them
      for (let j = 0; j < n - i - 1; j++) {
          // Compare adjacent elements
          if (arr[j] > arr[j + 1]) {
              // Swap if elements are in the wrong order
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              swapped = true;  // Set flag to true
          }
      }

      // If no swapping happened, the array is already sorted
      if (!swapped) break;
  }

  return arr;  // Return the sorted array
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", array);
const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);
//best-case-->O(n) 
//worst-case-->O(n^2) 
//average-case-->O(n^2) 


function selectionSort(arr){
  let n = arr.length; 

 
  for (let i = 0; i < n - 1; i++) {
      // Assume the current position as the minimum
      let minIndex = i;

      // Find the index of the smallest element in the remaining unsorted part
      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;  // Update minIndex if a smaller element is found
          }
      }

      // Swap the found minimum element with the first element of the unsorted part
      if (minIndex !== i) {
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
  }

  return arr;  
 }
 const array1 = [64, 25, 12, 22, 11];
 console.log("Unsorted array:", array1);
 const sortedArray1 = selectionSort(array1);
 console.log("Sorted array:", sortedArray1);



 //best-case-->O(n^2) 
//worst-case-->O(n^2) 
//average-case-->O(n^2) 



function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
      // Partition the array and get the pivot index
      const pivotIndex = partition(arr, low, high);

      // Recursively apply Quick Sort to the sub-arrays
      quickSort(arr, low, pivotIndex - 1);  // Left sub-array
      quickSort(arr, pivotIndex + 1, high); // Right sub-array
  }

  return arr;  // Return the sorted array
}


function partition(arr, low, high) {
  const pivot = arr[high];  // Choose the rightmost element as the pivot
  let i = low - 1;  // Index of the smaller element

  // Traverse through all elements, comparing each to the pivot
  for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
          i++;  // Increment index of the smaller element
          [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap if element is smaller than the pivot
      }
  }

  // Swap the pivot element with the element at i + 1
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;  // Return the index of the pivot
}

// Example usage
const array2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", array2);
const sortedArray2 = quickSort(array2);
console.log("Sorted array:", sortedArray2);

 //best-case-->O(nlogn) 
//worst-case-->O(n^2) 
//average-case-->O(nlogn)


//activity-2searching algorithms

function linerarySearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return i;
      }
  }
  return -1;
}

 console.log(linerarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))

 function binarySearch(arr, low, high, element) {
  if (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] === element) return mid;
      if (arr[mid] > element) return binarySearch(arr, low, mid - 1, element);
      if (arr[mid] < element) return binarySearch(arr, mid + 1, high, element);
  }

  return -1; // Return -1 if the element is not found
}

// Example usage
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = binarySearch(array4, 0, array4.length - 1, target);
console.log(result); // Output should be 6 (index of element 7)

 //best-case-->O(1) 
//worst-case-->O(logn) 
//average-case-->O(nlogn)


//string algorithms

function countOccurance(str, element) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === element) {
          count++;          
      }
  
 
        }
        return count;
      }

console.log(countOccurance("hello world", "l"))


function longestlength(str) {
  let maxi=0;
  for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
      if(str[i]!=str[j]) {
        maxi=Math.max(j-i,maxi);
      }
      else {
        break;
      }
    }
  }
  return maxi;
  }


console.log(longestlength("hggggg"))



function lengthOfLongestSubstring(s) {
  let map = new Map(); // Map to store the index of characters
  let left = 0;       // Left boundary of the window
  let maxLength = 0;  // Variable to keep track of the maximum length

 
  for (let right = 0; right < s.length; right++) {
      const char = s[right];

      // If the character is already in the map and its index is within the current window
      if (map.has(char) && map.get(char) >= left) {
          left = map.get(char) + 1; // Move the left boundary of the window
      }

      // Update the index of the character in the map
      map.set(char, right);

      // Calculate the maximum length of the substring found so far
      maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength; 
}


const input = "abcabcbb";
console.log(lengthOfLongestSubstring(input)); // Output: 3 ("abc")



//array algorithms
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // Normalize k to be within the range of array length

  if (k === 0) return arr; // No rotation needed if k is 0

  // Helper function to reverse a portion of the array
  function reverse(start, end) {
      while (start < end) {
          [arr[start], arr[end]] = [arr[end], arr[start]];
          start++;
          end--;
      }
  }

  // Reverse the entire array
  reverse(0, n - 1);
  // Reverse the first k elements
  reverse(0, k - 1);
  // Reverse the remaining n - k elements
  reverse(k, n - 1);

  return arr;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotateArray(arr, k));



function mergeSortedArrays(arr1, arr2) {
  let mergedArray = []; // Array to hold the merged result
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Iterate through both arrays until one is exhausted
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          mergedArray.push(arr1[i]);
          i++;
      } else {
          mergedArray.push(arr2[j]);
          j++;
      }
  }

  // If there are remaining elements in arr1
  while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
  }

  // If there are remaining elements in arr2
  while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
  }

  return mergedArray;
}

// Example usage
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));


//dynamic programming

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Create an array to store the Fibonacci numbers
  let dp = new Array(n + 1);

  // Base cases
  dp[0] = 0;
  dp[1] = 1;

  // Fill the dp array iteratively
  for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}


const position = 10;
console.log(`Fibonacci number at position ${position} is ${fibonacci(position)}`);


function knapsack(weights, values, capacity) {
  const n = weights.length;
  // Create a DP table to store the maximum value for each capacity and item
  let dp = new Array(n + 1).fill(null).map(() => new Array(capacity + 1).fill(0));

  // Fill the DP table
  for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
          // If the item weight is more than the current capacity, don't include the item
          if (weights[i - 1] > w) {
              dp[i][w] = dp[i - 1][w];
          } else {
              // Maximize the value: either include the item or exclude it
              dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
          }
      }
  }

  // The bottom-right cell of the DP table contains the maximum value
  return dp[n][capacity];
}


const weights = [1, 2, 3, 8, 7, 4];
const values = [20, 5, 10, 40, 15, 25];
const capacity = 10;

console.log(`Maximum value in the knapsack is ${knapsack(weights, values, capacity)}`);