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