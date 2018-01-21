/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

let head = null;
let tail = null; 


let createObj = function(value) {
 let listObj = {
 value: value,
 next: null,
  }  
  return listObj  
}

function getHead(){
return head;
}

function getTail(){
return tail;
}

function add(value){
let newNode = createObj(value)
if (head === null && tail === null){
    head = newNode;
    tail = newNode;
} else {
    tail.next = newNode;
    tail = newNode;
    }
    return newNode;
}






function remove(number){
    let targetNode = get(number); // node to be removed
    let previousNode = get(number-1); // node before deleted node
    let followingNode = get(number+1); // node after deleted node
   
    if(followingNode !== false && previousNode !== false){
    previousNode.next = followingNode;
        return
        } 
    if (targetNode.next === null){
        previousNode.next = null;
        tail = previousNode;
        return
        }
    if (number === 0){
         head = followingNode;
         return
    } else {
        return false;
    }
}


function get(number){
let currentNode;
if (number<0){
    return false;
}
if (head === null && tail === null){
    return null;
} else {
    currentNode = head;
}
for (var i = 0; i<number; i++){
    if (currentNode.next == null){
        return false;
    }
    currentNode = currentNode.next
}
return currentNode
}




function insert(value, number){

    let targetNode = get(number);
    let previousNode = get(number-1);
    let followingNode = get(number+1);
    let addedNode = add(value);

    //checks that we are within the parametes of the list
    if (!get(number)){
        return false;
    }
    //gets the target node where we need to insert
    if (previousNode !== false && followingNode !== false){
       previousNode.next = addedNode;
       addedNode.next = targetNode;
    } else if (targetNode === 0){
        addedNode.next = targetNode;
        head = addedNode;
    } else if (targetNode.next === null){
        targetNode.next = addedNode;
        tail = addedNode
    }
}


return{
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert:insert
    }
}

