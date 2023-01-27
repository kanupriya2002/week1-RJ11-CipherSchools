//LISTNODE-->
/*class LISTNODE{
Val;
next;
constructor(val,next=null){
  this.val=val;
  this.next=next;
}
}
class Testclass{
  head;
  constructor(head == null){
    this.head=head;
  }
  hasLast(){
    return this.head!==null;
  }
  getLast(){
    if(!this.hasLast()){
      return null;
    }
    let current = this.head;
    while(current.next!==null)
    current= current.next;
  }
  let finalValue = current.val;

  current = this.head;
  while(current.next.next && current.next.next!==null){
    current = current.next;
}
if(current.next!= null && current.next.next=null){
  current.next=null;
  return finalValue;
}
}
let myVariable = new Testclass(
  new LISTNODE(1,new LISTNODE(2,new LISTNODE(3,LISTNODE(4,new LISTNODE(5))))));
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());*/

  //Implementing a List Node in JavaScript
//As stated earlier, a list node contains two items: the data and the pointer to the next node. We can implement a list node in JavaScript as follows:

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
//Implementing a Linked List in JavaScript
//The code below shows the implementation of a linked list class with a constructor. Notice that if the head node is not passed, the head is initialised to null.

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}
//Putting it all together
//Let's create a linked list with the class we just created. First, we create two list nodes, node1 and node2 and a pointer from node 1 to node 2.

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2
//Next, we'll create a Linked list with the node1.

let list = new LinkedList(node1)
//Let's try to access the nodes in the list we just created.

console.log(list.head.next.data) //returns 5
//Some LinkedList methods
//Next up, we will implement four helper methods for the linked list. They are:

//size()
//clear()
//getLast()
//getFirst()
//1. size()
//This method returns the number of nodes present in the linked list.

/*size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}
//2. clear()
//This method empties out the list.

clear() {
    this.head = null;
}
//3. getLast()
//This method returns the last node of the linked list.

getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}
//4. getFirst()
//This method returns the first node of the linked list.

getFirst() {
    return this.head;
}*/
