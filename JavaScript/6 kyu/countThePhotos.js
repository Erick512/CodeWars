// description 

/*
In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left 
and we denote them with "<". There are also cameras that are indicated by: " . ". 
A camera takes a photo of a car if it moves to the direction of the camera.

Task 
Your task is to write a function such that, for the input string that represents a road as described, 
returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.
*/

// Parameters: string

// Returns: integer representing photos taken

// Example: '>>.' => two photos taken since two cars are pointing towards the camera (.)

/* Pseudo Code: 

    function that accepts a string
    split the string into an array
    check for cameras (.) and loop over every item to  see where cars are pointing
    add to count if pointing towards camera
    return count

*/


// Code


function countPhotos(road){
  
    const roadArr = road.split('')
    let photoCount = 0
    let fow = 0
    let prevCamera = 0


    roadArr.forEach((item, i) => {

        if(item == '>') {fow += 1}
        if(item == '<') {
            if(prevCamera > 0) {photoCount += prevCamera > 0 ? prevCamera * 1 : 0}
        }

        if(item == '.') {
            photoCount += fow
            prevCamera += 1
        }
    })

    return photoCount
}

// Tests

console.log(countPhotos('.><.>>.<<')) 
console.log(countPhotos('<..>>..>>.><.<.><..<')) 