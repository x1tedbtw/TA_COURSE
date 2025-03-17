/*
Easy level
#1
$x("//h1[1]")
#2
$x("//img[@alt]")
#3
$x("//button[text()='Start forming a habit!']")
#4
$x("//img[contains(@src, 'search')]")
#5
$x("//input[@type='checkbox']")
*/

//Medium level
//1
document.evaluate('//h1/text()', document, null, XPathResult.STRING_TYPE, null);
//2
let count = 0;
let xpathResult = document.evaluate(
    '//img[@alt]',
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
);

count = xpathResult.snapshotLength;
console.log(`Found ${count} images with the alt attribute.`);

//3
let count = 0;
let justButtonsResult = document.evaluate(
    '//button',
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
);
count = justButtonsResult.snapshotLength;
let habitButton = document.evaluate(
    '//button[text()=" Start forming a habit! "]', // this button can be found with spaces from both sides "_word_"
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
);
if (habitButton.snapshotLength > 0) {
    console.log(habitButton);
} else {
    console.log(`Number of buttons: ${count}`);
}
//4

let searchResult = document.evaluate(
    '//img[contains(@alt, "search") and contains(@src, "search")]',
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
);

if (searchResult.snapshotLength > 0) {
    let isVisible = false;

    for (let i = 0; i < searchResult.snapshotLength; i++) {
        let imgElement = searchResult.snapshotItem(i);

        if (imgElement.offsetWidth > 0 && imgElement.offsetHeight > 0) {
            isVisible = true;
            console.log("Search icon found and visible:", imgElement);
            break;
        }
    }

    if (!isVisible) {
        console.log("Search icon found but not visible.");
    }
} else {
    console.log("Search icon not found.")
}

//5
let checkboxResult = document.evaluate(
    '//input[contains(@checked, "true") or contains(@checked, "false")]',
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
);
let isChecked = 0;
let notChecked = 0;
if (checkboxResult.snapshotLength === 3) {
    for (let i = 0; i < checkboxResult.snapshotLength; i++) {
        if (document.querySelector('input[type="checkbox"][checked="true"]')) {
            isChecked++;
        } else {
            notChecked++;
        }
    }
    console.log(`Found checked boxes: ${isChecked}`)
    console.log(`Found unchecked boxes: ${notChecked}`)
}
else {
    console.log("Not all checkboxes are found!")
}

//6
let switcher = document.evaluate("//ul[contains(@aria-label,'language switcher')]//li",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null);

let english = document.evaluate(
    "//li[contains(@aria-label,'english')]",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null);

let ukrainian = document.evaluate(
    "//li[contains(@aria-label,'Ua')]",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null);


let lang = '';
if (english) {
    lang = 'english';
} else if (ukrainian){
    lang = 'ukrainian';
}

switcher.singleNodeValue.click();
console.log("Language toggle element was detected.")



if (lang === 'english') {
    let ukrainian = document.evaluate(
        "//li[contains(@aria-label,'Ua')]",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null);
    ukrainian.singleNodeValue.click();
} else {
    let english = document.evaluate(
        "//li[contains(@aria-label,'english')]",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null);
    english.singleNodeValue.click();
}






