function syncSleep(){
    let x = 0
    for (let i = 0; i < 10000000 ; i++){
        x++
    }
}
function sayMyName(){
    console.log("sagar")
}
syncSleep()
setTimeout(sayMyName, 100)
console.log("hello")