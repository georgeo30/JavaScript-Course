//var VS let


let iAmGlobal='someValue'

if(true){
    var iAmLocal='someMoreValue'
    iAmGlobal='superMan'
    console.log(iAmGlobal)
    //console.log(iAmLocal)
}

console.log(iAmLocal)
console.log(iAmGlobal)

//var makes a variable globally access from everywhere whereas let in withing a particular block or within it.