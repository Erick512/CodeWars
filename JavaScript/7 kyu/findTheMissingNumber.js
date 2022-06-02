function missingNo(nums) {
    nums.sort((a, b) => a-b)
    let missing = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] + 1 != nums[i + 1]){
            missing  = nums[i] + 1
            break
        }
    }
    return missing
}

console.log(missingNo([1,2,3,4,7]))