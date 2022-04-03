function doubleOrNothing(cash, wager, losses){
    //your code here
    
    for(let i = 1; i < losses; i++){
        wager += wager
    }
    cash -= wager
    
    return cash < 0 ?  "I'll pay you back later" : cash
  }


  console.log(doubleOrNothing(11,2,3))