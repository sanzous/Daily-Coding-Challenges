//P - a binary tree
//R - if the root of the tree is equal to the sum of its children then true otherwise false
//E - Input: root = [10,4,6]
// Output: true
// Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
// 10 is equal to 4 + 6, so we return true.
//P We return the value of the left and right child by accessing them via root.(direction).value and checking if it equals to root.value

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
    return root.right.val + root.left.val === root.val
}