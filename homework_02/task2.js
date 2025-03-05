let array = [7,12,100,54,65,7,9,0,1,2,5];
let filteredArray = [];
function filterArray() {
    for (let i =0; i < array.length; i++) {
        if (array[i] < 50) {
            filteredArray.push(array[i]);
        }
    }
    console.log(`Filtered array: ${filteredArray}`)
}

filterArray(array);

