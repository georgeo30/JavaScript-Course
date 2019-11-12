let myYoutubeVideoOne={
    title: 'Loops in javaScript',
    videoLength: 15,
    videoCreator: 'Georgeo',
    videoDescription: 'this is a video description and a long one'


}
let myYoutubeVideoTwo={
    title: 'Funcctions in javaScript',
    videoLength: 10,
    videoCreator: 'Georgeo',
    videoDescription: 'this is a video description and a long one'


}

let changeVideoLength=function(myObject){
    return {
        formatOne: `Time of this video is: ${myObject.videoLength+2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength+1}`
    }
}

let addOne =changeVideoLength(myYoutubeVideoTwo)
console.log(addOne.formatOne)