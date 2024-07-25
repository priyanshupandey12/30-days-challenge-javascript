import {addtwonumber,person} from "./index.js";

import { add, subtract } from './index.js';
import multiply from './index.js';
import * as math from './index.js';
import _ from 'lodash';
import axios from 'axios';
//activty-1
console.log(addtwonumber(2,0));

console.log(person.fullname());

//activty-2


const sum = add(7, 2);
const difference = subtract(7, 2);
console.log(`The sum is ${sum}`);
console.log(`The difference is ${difference}`);


const product = multiply(4, 5);
console.log(`The product is ${product}`);


//activity-3:Importing Entire Modules

console.log(`The value of PI is ${math.PI}`);
console.log(`The value of E is ${math.E}`);
console.log(`The square of 3 is ${math.square(3)}`);
console.log(`The cube of 3 is ${math.cube(3)}`);


//Activity 4: Using Third-Party Modules

//Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = _.reverse([...numbers]); // Using lodash's reverse function

console.log('Original numbers:', numbers);
console.log('Reversed numbers:', reversedNumbers);



//Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

async function fetchData() {
  try {
    const response = await axios.get('https://icanhazdadjoke.com/slack');
    console.log('Data fetched from API:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();


//Activity 5: Module Bundling