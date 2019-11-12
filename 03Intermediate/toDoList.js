const myTodos = []

myTodos.push('Buy bread')
myTodos.push('Record videos')
myTodos.push('go to gym')

myTodos.forEach(function(things,index){
    console.log(`your task number ${index+1} is: ${things}`)
})