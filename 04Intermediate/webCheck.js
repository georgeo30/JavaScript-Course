let userEmail='LCO123dsf'
let password = '1234'

let userCheser=function(myString){
    if((myString.includes(123))&& myString.length>6){
        return true;
    }
    return false;
}

let passChecker=function(pass){
    if((pass.includes(1234))&& pass.length>8){
        return true;
    }
    return false;
}