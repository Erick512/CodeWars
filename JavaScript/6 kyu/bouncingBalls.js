function bouncingBall(h,  bounce,  window) {
    if(h <= 0 || window > h || (b <= 0 || b >= 1 )) {
        return -1
    }

    let bounces = 0

    while(h > window){
        h/bounce
        bounces++
    }
}

console.log(bouncingBall(3.0, 0.66, 1.5)) // 3