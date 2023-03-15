// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//P - a linked list
//R - if the linked list contains a cycle then return the node that is connected by the tail if not return null
//E - Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
//P - First we set 2 pointers equal to the linked list.
// We then check to see if the list has a cycle or doesn't with a while loop. inside the while loop we set the first pointer to jump 1 node each time and the 2nd pointer to jump 2 nodes and this will run until either pointer is null meaning no cycle or the 2 pointers equal eachother meaning their is a cycle.
// If p2 or the node after is null that means no cycle and we return null
// if it isnt null we find the pos by using two pointers until they point to the same node and then return that
var detectCycle = function (head) {
    var p1 = head, p2 = head;
    while (p2 != null && p2.next != null) {
        p1 = p1.next;
        p2 = p2.next.next;

        if (p1 == p2) break;
    }

    if (p2 == null || p2.next == null) return null;

    while (head != p1) {
        head = head.next;
        p1 = p1.next;
    }
    return head;
};