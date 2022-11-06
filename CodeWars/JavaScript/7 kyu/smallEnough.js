function smallEnough(a, limit) {
    return Math.max(...a) <= limit
}

console.log(smallEnough([66, 101], 8))