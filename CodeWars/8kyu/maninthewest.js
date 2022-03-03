// A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

// So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

//P - an array of words, will always be words and no numbers
//R - true or false if the parameter contains the word gold
//E - [stone,stone,stone] will return false since it doesn't contain gold
//P - we can check if the parameter includes the word gold by using the .includes() method on the parameter and then 
//returning it. It will return true if it does and false if it doesn't

function checkTheBucket(bucket) {
    return bucket.includes('gold')
}

