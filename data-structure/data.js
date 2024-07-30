
//activity-1:linked list
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    const newNode=new Node(value);
    this.tail.next=newNode;
    this.tail=newNode;
    this.length++;
   return this;
  }
  
  remove() {
    if(!this.head) return undefined; 
    let temp = this.head; 
    this.head = this.head.next;
    this.length--; 
    return temp;

  }
  display() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.value);
    
    }

  }
}
