// const sayHello=function(name){
//     return "Hey there, "+ name + " !"
// }

// console.log(sayHello('george'))

const sayHello=(name) => `Hey there ${name}! `


console.log(sayHello('george'))

const todos=[{
    title: 'Buy bread',
    isDone: true,
},{
    title: 'Go to gym',
    isDone: true,
},{
    title: 'Record youtube video',
    isDone: false,
}]


const thingsDone=todos.filter((todo)=> todo.isDone===true)

console.log(thingsDone)
