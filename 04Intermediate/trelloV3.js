let myTodos={
    day: 'monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        this.meetings=this.meetings+num
    },

    summary: function(){
        return `You have ${this.meetings} meetings today`
    }
}



myTodos.addMeeting(4)
console.log(myTodos.summary())

//assigment
//handle meetings done
// create a function that can reset an entire day
// summary aswell
