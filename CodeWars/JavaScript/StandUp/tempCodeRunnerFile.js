 for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            arr1.splice(i, 1)
            i -= 1
        }
    }
    
    return arr1