var john={
    name:   'I am John',
    age:    24,
    isActive:   true,

}

var marry={
    name:   'I am Mary',
    age:    23,
    isActive:   true,
}

var sam={
    name:   'I am Sam',
    age:    29,
    isActive:   false,
}

let users=new Map()

users.set('john',john)  //'john'(first parameter) is the key, john(second param iss what is beig mapped to the key)
users.set('marry',marry)
users.set('sam',sam) 

// console.log(users.size)
// console.log(users.get('john'))
// console.log(users.keys())
// console.log(users.values())

for (const key of users.values()) {
    console.log(key.name)
}

for (const [key,value] of users.entries()) {
    console.log(`${key}=${value.name}`)
}

users.forEach((value,key)=>console.log(`${key}=${value.name}`))

var arrOfArr=[['one','1'],['two','2'],['three','3']]

var newMap=new Map(arrOfArr)

console.log(newMap)