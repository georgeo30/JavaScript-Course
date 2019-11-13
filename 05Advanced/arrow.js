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
},{
    title:  'Take pain medication',
    isDone: false
},{
    title:  'Eat healthy',
    isDone: true
},{
    title:  'Call friend and wish happy birthday',
    isDone: false
}]


const thingsDone=todos.filter((todo)=> todo.isDone===true)

const isNotDone=todos.filter((todo)=> {
    if(todo.isDone===false){
        console.log(todo.title)
    }

})

let returnS=isNotDone;
returnS.forEach(element => {
    console.log(element.title)
});