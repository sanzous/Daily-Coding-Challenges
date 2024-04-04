// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

var maxArea = function (height) {
    let biggestFoundArea = 0;
    let left = 0;
    let right = height.length - 1;

    // Run until the left and right markers meet
    while (left < right) {
        // Set the maximum height of the current area
        const maxHeight = Math.min(height[left], height[right]);

        // Calculate the current area
        const currentArea = maxHeight * (right - left);

        // Update the biggest found area
        biggestFoundArea = Math.max(biggestFoundArea, currentArea);

        // Move the left or right marker inwards (whichever is smaller)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return biggestFoundArea
}