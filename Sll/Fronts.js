class Node {
    constructor(value) {
        this.value = value;
        this.next = null;              
    }
}
 class SLL {
     constructor(value) {
    	this.value = null;
    }
    addFront(value) {
        let new_node = new Node(value);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        console.log(this.head)
        return this;
    }
    removeFront() {
    	this.head = this.head.next;
    }
    front(){
        var data = this.head.value;
        console.log(data)
        return data
    }
   
}   

const SLL1 = new SLL()
SLL1.addFront(18)
SLL1.addFront(5)
SLL1.addFront(73)
SLL1.removeFront()
SLL1.front()
