function textAnalyzer(text) {
    const myArray = text.split(" ");
    console.log("Words number = " + myArray.length);
    for (let i=0; i < myArray.length; i++){
        console.log("i = " + i + " myArray = " + myArray[i]);
    }
    let imax = 0;
    let max = myArray[imax].length;
    for (let i=0; i < myArray.length; i++){
        if (max < myArray[i].length) {
            imax = i;
            max = myArray[imax];
        }
    }
    console.log("Longest word: " + myArray[imax] + " Length = " + max.length);
}

textAnalyzer("How are you doing today?")