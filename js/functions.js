function uniqueRandomNumberArray(arrLen,max){
    let arr = [];

    for(let index = 0;index < arrLen;index++){

        let aNumber = null;
        do {
            aNumber = randomNumber(1, max);
        } while (arr.includes(aNumber));

       arr.push(aNumber);
    }
    return arr;
}



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




