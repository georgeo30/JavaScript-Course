const numbers=['one','two','three','four','five','six']

//replace
numbers[1]='Something'
console.log(numbers)

//start -- 
//removes first element from array
console.log(numbers.shift())
console.log(numbers)

//enters one more value at position number 0 of the array
numbers.unshift('SomethingNew')
console.log(numbers)

//end
console.log(numbers.pop())
console.log(numbers)

numbers.push('seven')
console.log(numbers)

//middle
numbers.splice(2,1,'replcedThirdElement')
console.log(numbers)