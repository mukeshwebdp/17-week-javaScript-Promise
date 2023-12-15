const data = {
    name: 'Mukesh',
    lastName: 'Singh',
    age: 20,
}

function ageInDay(personObject,callback){
    const fullName = `${personObject.name} ${personObject.lastName}`
    const ageInDays = personObject.age *365 ;
    callback(fullName,ageInDays)
}

function logResult(fullName,ageInDays){
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
}

ageInDay(data,logResult)