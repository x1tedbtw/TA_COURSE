// Easy level
//1
let imgElement = document.querySelectorAll('img');
console.log(imgElement);
//2
let imgIconElement = document.querySelectorAll('img[src*="icon"], img[class*="icon"]');
console.log(imgIconElement);
//3
let buttonElement = document.querySelectorAll('button');
console.log(buttonElement);
//4
let inputElement = document.querySelectorAll('input');
console.log(inputElement);
//5
let linkElement = document.querySelectorAll('a[routerlink="/places"]')[0];
console.log(linkElement);

// Medium level
// Task 1
let count = 0;
document.querySelectorAll('img').forEach(
    function (image, index){
        if (image.naturalHeight > 300) {
            console.log(image.naturalHeight);
             count++;
        }
    });
console.log(`Total number of images over height of 300px: ${count}`)

//Task 2
let countUniqueColor = 0;
let uniqueColors = new Set();
document.querySelectorAll('*').forEach(
    function (element) {
        let style = window.getComputedStyle(element);
        let color = style.color;
        if (!uniqueColors.has(color)) {
            uniqueColors.add(color);
            countUniqueColor++;
        }
    }
);
console.log(countUniqueColor);

// Task 3
let countButtons = document.querySelectorAll('button').length;
console.log(countButtons);

// Task 4
let inputTypes = [];
document.querySelectorAll('input').forEach(input =>{
    inputTypes.push(input.type);
});
console.log(inputTypes);

// Task 5
document.querySelectorAll('a.footer_social-link').forEach(
    function (element) {
        let href = element.href;
        console.log(href)
    });

// Hard level
// Task 6

// 1
const currentDayNum = document.querySelector(".current-day")?.textContent.trim() || "Unknown Number";
const currentMonthAndYear = document.querySelector(".monthAndYear")?.textContent.trim() || "Unknown Number";
console.log(`Current day: ${currentDayNum} ${currentMonthAndYear}`);
// 2
const arrowPrevious = document.querySelector(".arrow-previous")
console.log(arrowPrevious.src)
const arrowNext = document.querySelector(".arrow-next");
console.log(arrowNext.src);
// 3
let daysOfWeek = [];
document.querySelectorAll(".days-name").forEach(day =>{
    daysOfWeek.push(day.textContent.trim());
});
console.log(daysOfWeek);




