//&& -AND 
//|| -OR

let user='john'
let passwrod='password'
let isVerfied=true
let isLoggedIn=true
let hasPaymentToken=true
let isGuest=true

if(!isVerfied&&isLoggedIn&&hasPaymentToken){
    console.log('Greeting message to user')
    
}
else if(isVerfied||isGuest){
    console.log('allowFreeAccess')

}
else{
    console.log('error')
}