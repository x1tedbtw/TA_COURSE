let page = ["id=\"firstname-err-msg\"", "class=\"close-modal-window\"", "for=\"email\"", "for=\"password\""];
function checkIfPresent(page) {
    for (let i = 0; i < page.length; i++){
        if (page[i] === "for=\"password\"") {
            console.log(`Element ${page[i]} is found!`)
        }
        else {
            console.log("Searching...")
        }
    }
}

checkIfPresent(page);
