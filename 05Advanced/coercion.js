console.log('5'-5);
console.log('5'+5);
//why is javascript treating one as integers and the other as 
//a string?
//never allow javaScript predict anything for you 
//can lead tp logical errors

const giveType=typeof 5
console.log(giveType)

const adder=true+5 //true is a literal 1 and false is 0 to answer would be 6 
console.log(adder)


//

const logInDetails=[]

const logInId=logInDetails[0]
if(logInId!==undefined){
    console.log('Allow user to log in')
}
else{
    console.log('login failed')
}


//Values that are interpreted as false
//- false
//- 0
//- ''
//- null
//- undefined

// other than these values everything else is true
//empty objects,arrays are true only the empty string '' is false