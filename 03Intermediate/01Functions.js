let  sayHello=function(name){
    console.log(`Greeting message for ${name}`)
    console.log('Hey '+name)
}

let fullNameMaker=function(fname,lname){
    console.log(`Welcome to LCO`)
        console.log(`Happy to meet you ${fname} ${lname}`)
}

let myAdder=function(numOne,numeTwo){
    let added=numOne+numeTwo
    return added
}

sayHello('John')
fullNameMaker('John','Doe')
let answer=myAdder(5,5)
console.log(answer)