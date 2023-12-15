function manipulateString(Inputstring,callback){
 const manipulatedValue = Inputstring.toUpperCase()
 callback(manipulatedValue)
}

function logString(manipulatedValue){
    console.log(`the manipulated string is : ${manipulatedValue}`);
}

manipulateString("hello World",logString)