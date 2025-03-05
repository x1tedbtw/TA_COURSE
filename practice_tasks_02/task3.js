function randomNumber() {
    myArray = ["yo", "sup", "ok", "nah", "af"]
    for (let i = 0; i < myArray.length; i++) {
        let k = Math.trunc(Math.random() * myArray.length);
        console.log("k = " + k + " myArray[k] = " + myArray[k]);
    }
}

randomNumber();
