function getPrime(n) {
    let primeArray = new Array();
    primeArray[0] = 2;
    let k = 1;
    // let max = Math.trunc( Math.sqrt(n) ) + 1;  // 20 = 2*10; 4*5;
    for (let i = 3; i <= n; i = i + 2) {
        let isPrime = true;
        for (let j = 0; j < primeArray.length; j++) {
            if ( (i > primeArray[j]) && (i % primeArray[j] == 0) ) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeArray[k] = i;
            k++
        }
    }
    return primeArray;
}
console.log("Prime Array = " + getPrime(23) );
