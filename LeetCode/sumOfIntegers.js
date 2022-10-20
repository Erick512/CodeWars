
var twoSum = function(nums, target) {
    
    let first, second
    
    for(let i = 1; i < nums.length; i++) {
        for(let x = 0; x < nums.length; x++) {
            if(nums[i] + nums[x] == target) { 
                
                first = x
                second = i
                break;
            }
        }
    }
    
    return [first, second]
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,3], 6))
console.log(twoSum([2,4,11,3], 6))