const myTodos=['Buy bread','Go to Gym','Record youtube videos']

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

const index =newTodos.findIndex(function(todo,index){
    console.log(todo)
    return todo.title==='Go to Gym'
})

console.log(index)