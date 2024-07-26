
//activty-1:Class definition

class Person {
  constructor(name,age) {
    this.name=name;
    this.age=age;
  }
  greet(){
    console.log(`hello my name is ${this.name} and my age is ${this.age}`)
  }

    // Static method
    static genericGreeting() {
      return 'Hello! This is a generic greeting.';
  }
}
const person1=new Person("Naruto",20);
person1.greet();
person1.age=25;
person1.greet();

//activty-2:Class inheritance

class Student extends Person {
  constructor(name,age,studentId) {
    super(name,age); // Call the parent class constructor
    this.studentId=studentId; // Add a new property studentId
    Student.count+=1;
  }
  getstudentId(){
    console.log(`my student id is ${this.studentId}`)
  }
  greet(){
    return `Hello, ${this.name} ${this.age}! Your student ID is ${this.studentId}.`;
  }
}
Student.count=1;
const student1=new Student("Naruto",20,12345);
student1.getstudentId();

console.log(student1.greet())

//activty-3:SATIC METHODS AND PROPERTIES

console.log(Person.genericGreeting()); // Call and log the static method without creating an instance
console.log(`Total number of students: ${Student.count}`);//Total number of students: 2

//activity-4;GETTER AND SETTER 

class Person3 {
  constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  // Getter method for the full name
  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  }
   // Setter method to update the name properties
   set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
}
}

const person = new Person3('John', 'Doe');
console.log(person.fullName); // John Doe
person.fullName = 'Jane Smith'; // 
console.log(person.fullName); // Jane Smith


//Activity 5: Private Fields (Optional)

class Account {
  #balance; // Private field for balance

  constructor(initialBalance) {
      this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
      this.#balance += amount;
      return this.#balance;
  }

  // Method to withdraw money
  withdraw(amount) {
      if (amount <= this.#balance) {
          this.#balance -= amount;
          return this.#balance;
      } else {
          throw new Error('Insufficient balance');
      }
  }

  // Method to get the current balance
  getBalance() {
      return this.#balance;
  }
}


const account = new Account(1000); 

account.deposit(500); // 
console.log(account.getBalance()); //1500

account.withdraw(300); // 
console.log(account.getBalance()); // 1200

try {
    account.withdraw(1500); // 
} catch (error) {
    console.error(error.message); // Insufficient balance
}
