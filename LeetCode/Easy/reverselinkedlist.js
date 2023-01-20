/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//P - A linked list
//R - the same linked list but in reverse
//E - Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
//P - in the function we pass in head, and then prev which we will set the first on to null to hold the new list
// We then check if head is empty, if it is we return prev
// If not we create a temp variable to hold the next value in head
// we then set the next head value to prev and then call the 
// the function again recursively passing in next and head
var reverseList = function (head, prev = null) {

    if (!head) return prev;
    let next = head.next;
    head.next = prev;


    return reverseList(next, head);
};