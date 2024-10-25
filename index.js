//Taha Rashid
// Oct 24, 2024
// JS file for index.html

// get items to fade in when the screen loads initially
const appear = (item) => {
    const selected = document.querySelector(item)
    selected.classList.add("visible")
}

// function that does the delayed fade in
const appearDelay = async (waitTime, item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            window.addEventListener("load", appear(item));
            resolve();
        }, waitTime);
    })      
}

// running the fade-in code
let time = 400
appearDelay(time, "#nav-top")
.then(() => appearDelay(time, ".inside-left"))
.then (() => appearDelay(time, ".inside-right"))
