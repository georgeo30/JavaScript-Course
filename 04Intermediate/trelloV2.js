let myTodos={
    day: 'monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting=function(todo,meet=0){
    todo.meetings=todo.meetings+meet;
}

let meetDone=function(todo,meet=0){
    todo.meetDone=todo.meetDone+meet;
}

let resetDay=function(todo){
    todo.meetings=0;
    todo.meetDone=0;
}

let getSummaryOfDay=function(todo){
    let remMeeting= todo.meetings-todo.meetDone;
    return `You have ${remMeeting} meeting remaining today!`

    
}

addMeeting(myTodos,4)
addMeeting(myTodos,2)
meetDone(myTodos,5)
console.log(getSummaryOfDay(myTodos))

console.log(myTodos)