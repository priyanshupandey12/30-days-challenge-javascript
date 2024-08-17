// Activity 1: Basic Regular Expressions

// Task 1: Match all occurrences of "JavaScript"
let task1Regex = /JavaScript/g;
let task1String = "JavaScript is awesome. I love JavaScript!";
console.log("Task 1 matches:", task1String.match(task1Regex));

// Task 2: Match all digits in a string
let task2Regex = /\d/g;
let task2String = "There are 42 apples and 7 oranges.";
console.log("Task 2 matches:", task2String.match(task2Regex));

// Activity 2: Character Classes and Quantifiers

// Task 3: Match all words that start with a capital letter
let task3Regex = /\b[A-Z][a-z]*\b/g;
let task3String = "The Quick Brown Fox Jumps Over The Lazy Dog.";
console.log("Task 3 matches:", task3String.match(task3Regex));

// Task 4: Match all sequences of one or more digits
let task4Regex = /\d+/g;
let task4String = "There are 42 apples, 7 oranges, and 365 days in a year.";
console.log("Task 4 matches:", task4String.match(task4Regex));

// Activity 3: Grouping and Capturing

// Task 5: Capture area code, central office code, and line number from US phone number
let task5Regex = /\((\d{3})\) (\d{3})-(\d{4})/;
let task5String = "(123) 456-7890";
console.log("Task 5 captures:", task5String.match(task5Regex).slice(1));

// Task 6: Capture username and domain from email address
let task6Regex = /(\w+)@(\w+\.\w+)/;
let task6String = "user@example.com";
console.log("Task 6 captures:", task6String.match(task6Regex).slice(1));

// Activity 4: Assertions and Boundaries

// Task 7: Match a word only if it's at the beginning of a string
let task7Regex = /^hello/;
let task7String = "hello world";
console.log("Task 7 matches:", task7String.match(task7Regex));

// Task 8: Match a word only if it's at the end of a string
let task8Regex = /world$/;
let task8String = "hello world";
console.log("Task 8 matches:", task8String.match(task8Regex));

// Activity 5: Practical Applications

// Task 9: Validate a simple password
let task9Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
let task9String = "P@ssw0rd";
console.log("Task 9 valid password:", task9Regex.test(task9String));

// Task 10: Validate a URL
let task10Regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
let task10String = "https://www.example.com";
console.log("Task 10 valid URL:", task10Regex.test(task10String));