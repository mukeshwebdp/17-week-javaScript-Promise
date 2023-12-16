async function getconnectedData(){
    const [data1, data2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response)=> response.json()),
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=>response.json()),
    ])
    const combinedData = {
        todo : data1,
        psot: data2,
    }
    return combinedData;
}
getconnectedData().then((data)=> console.log(data));