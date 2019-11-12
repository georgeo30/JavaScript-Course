let grade=function(mark=0){
    if (mark>=90){
        return 'A*'
    }
    else if(mark>=80){
        return 'A'
    }
    else if(mark>=70){
        return 'B'
    }
    else if(mark>=60){
        return 'C'
    }
    else if(mark>=50){
        return 'D'
    }
    else{
        return 'F'
    }
}

const sName=['john','Michael','Oliver','Richard','Francis']
const sMark=[84,23,78,56,90]

for(let i=0;i<sName.length;i++){
    let rGrade=grade(sMark[i])
    console.log(`Student ${sName[i]} Grade = ${rGrade}`)
}