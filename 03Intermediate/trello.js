const days=['monday','tuesday','wednesday','thursday','friday','saturday']


// console.log(days[0])


// days.forEach(function(day,index){
//     console.log(index)
//     if(day==='monday'||day==='wednesday'){
//         console.log('You have to attend a meeting at 9 am')
//         console.log(days.shift())
        
//     }
//     else if(day==='tuesday'){
//         console.log('dont go to work today')
//     }
//     else{
//         console.log('Work at 8 am')
//     }
// })

// console.log(days)
for(let i=days.length-1;i>=0;i--){
    console.log(days[i])
}