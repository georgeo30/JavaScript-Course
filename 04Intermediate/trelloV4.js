//const myTodos=['Buy bread','Go to Gym','Record youtube videos']

//console.log(myTodos.indexOf('Buy bread'))


const newTodos=[{
    title: 'Buy bread',
    isDone: false,

},{
    title: 'Go to Gym',
    isDone: false
},{
    title: 'Record youtube videos',
    isDone: false,
}] 

// const index =newTodos.findIndex(function(todo,index){
//     console.log(todo)
//     return todo.title==='Go to Gym'
// })

// console.log(index)

// //method1
// const findTodo=function(myTodos,title){
//     const index=myTodos.findIndex(function(todo,index){
//         return todo.title.toLowerCase()===title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let printMe=findTodo(newTodos,'Go to gym')
// console.log(printMe)


//Method 2
const findTodo=function(myTodos,title){
    const titlereturn=myTodos.find(function(todo,index){
        return todo.title.toLowerCase()===title.toLowerCase();
    })
    return titlereturn
}
let printMe=findTodo(newTodos,'Go to gym')
console.log(printMe)
