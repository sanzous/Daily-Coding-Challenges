/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//P - two linked lists containing integers
//R - the two linked lists merged into one in ascending order
//E - Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
//P - First we create a the new list node
// Then we set the variable that will hold the list values and set it to the new list node
// We then create a while loop that'll keep running while both lists are truthy
// Inside the while loop we check which current list value has the lowest value
// The one with the lowest value we will set to cur.next and then set that list to
// go to the next value using the next method. 
// We then set cur to the cur.next value at the end we set cur.next to whatever list has the last element left and then we return the next value of dummy
var mergeTwoLists = function (l1, l2) {
    const dummy = { next: null };
    let cur = dummy;
    while (l1 && l2) {
        l1.val < l2.val ? (cur.next = l1, l1 = l1.next) : (cur.next = l2, l2 = l2.next);
        cur = cur.next;
    }
    cur.next = l1 || l2;
    return dummy.next;
};