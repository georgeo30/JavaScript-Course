const convertRupees=(dollars)=>{
    if(typeof dollars === 'number'){
        return dollars*64    
    }
    
    else{
        throw Error('Amount needs to be a number')
    }
}

try {
    const myVal=convertRupees('five')
console.log(myVal)
} catch (error) {
    console.log(error)
}

console.log('I will not run if program crashes')