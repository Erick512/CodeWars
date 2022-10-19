/*
The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, 
comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, 
so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.


*/

function removeSmallest(numbers) {
    
    let low = numbers[0]
    let index = 0
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < low) {
            low = numbers[i]
            index = i
        }
    }
    let copy = [...numbers]
    copy[index] = null
    return copy.filter(x => x != null)
}

// tests

console.log(removeSmallest([1,2,3,4,5]))