function mymodulus(number) {

    if (number % 5 === 0 && number % 2 === 0) {
        alert("no remaining")
    } else {
        alert("remains something")
    }
}
mymodulus(10);



function threearguments(x, y, z) {

    return x + y + z
}
console.log(threearguments(15, 25, 32));


function comparelengths(text1, text2) {
    if (text1.length > text2.length) {
        console.log("i am the longest")
    } else if (text1.length === text2.length) {
        console.log("we are same")


    } else
        console.log("no i am the longest text")
}
comparelengths("yagmyr", "eminka");


function ifelsestatement(userAge) {
    if (userAge < 67) {
        console.log("You look  older than " + userAge)
    } else console.log("supposed to be you already retired,but you are still driving uber!")

}
ifelsestatement(50)