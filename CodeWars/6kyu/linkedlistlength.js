// Linked Lists - Length & Count

// Implement Length() to count the number of nodes in a linked list.

// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3
// Implement Count() to count the occurrences of an integer in a linked list.

// count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
// I've decided to bundle these two functions within the same Kata since they are both very similar.

// The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.

//P - A linked list thbat could be null
//R - for function length we return the length of the linked list, for function count
// the amount of times the given integer appears in the linked list
//E - count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
//P - for function length, we first set a variable to hold the count value of length as we go node by node
// We then create a while loop that checks if the current node contains a value
// If it does we then step to the next node and iterate count by 1
// After going through the linked list we return the count variable
// For function count we do the same but we add an if statement where we only iterate count if 
// the current node value equals to the integer we are given.

function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    let i = 0;
    while (head) {
        head = head.next;
        i++;
    }
    return i;
}

function count(head, data) {
    let count = 0;
    while (head) {
        if (data === head.data) {
            count += 1;
        }
        head = head.next;
    }
    return count;
}