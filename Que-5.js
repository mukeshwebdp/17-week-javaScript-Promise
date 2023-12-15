function greeting(name){
   return new Promise(function(resolve,reject){
        const wishes = `Hello ${name}`
        resolve(wishes);
    })
}
greeting('Mueksh').then(function(data){
    console.log(data);
})