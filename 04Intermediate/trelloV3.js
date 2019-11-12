let myTodos={
    day: 'monday',
    meetings: 0,
    meetDone: 0,
    remainingMeeting: 0,

    addMeeting: function(num){
        this.meetings=this.meetings+num
        this.remainingMeeting=this.remainingMeeting+num;
    },

    summary: function(){
        return {
            ayyo: `You have ${this.meetings} meetings today`,
            ayy: `You had ${this.meetDone} meetings today`,
            ay:     `You have ${this.remainingMeeting} meetings remaining today`,
        }
    },

    meetingDone: function(meet){
        this.meetDone=this.meetDone+meet
        this.remainingMeeting=this.remainingMeeting-meet
    },
    
    reset: function(){
        this.meetings=0;
        this.meetDone=0;
    },
}



myTodos.addMeeting(4)
myTodos.meetingDone(3)
console.log(myTodos.summary().ayyo)
console.log(myTodos.summary().ayy)
console.log(myTodos.summary().ay)

//assigment
//handle meetings done
// create a function that can reset an entire day
// summary aswell
