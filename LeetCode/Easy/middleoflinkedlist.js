// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

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
//P - a list of integers
//R - the 'middle' of the list
//E - Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
//P - We can find the middle of the list by using 2 pointers. The first pointer will point to two nodes ahead of the second. When the first pointer is at the end the second pointer should be at the middle
// We can set the 1st and second pointer to head and then use a while loop while the first pointer is still truthy
// While it is truthy we can set the 2nd pointer to the next node and then the 1st pointer to the node 2 ahead
var middleNode = function (head) {
    let first = head, second = head
    while (first !== null && first.next !== null) {
        second = second.next
        first = first.next.next
    }
    return second
};