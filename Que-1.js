
    function doualusingcallback(arr,callback){
        const value = arr.map(callback)
        return value;
    }

    const inputArray = [1,2,4,5]

    const doualcallback = function callback(num){
        return num *2;
    }

    const result = doualusingcallback(inputArray,doualcallback)
    console.log(result);
    