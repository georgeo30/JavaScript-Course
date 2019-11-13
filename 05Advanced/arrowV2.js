const camera={
    price: 600,
    weight: 2000,
    ///do not use arrow functions here 
    // do not use arrow functions in methods or constructors
    myDes:  function(){
        return  `This  canon camera is of ${this.price}$ while it weighs ${this.weight} kg`
    }
}
//arrow functions 
console.log(camera.myDes())