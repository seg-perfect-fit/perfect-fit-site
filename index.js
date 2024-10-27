//Taha Rashid
// Oct 24, 2024
// JS file for index.html

// get items to fade in when the screen loads initially
const appear = (item, addedClass="visible") => {
    const selected = document.querySelector(item)
    selected.classList.add(addedClass)
}

// function that does the delayed fade in
const appearDelay = async (waitTime, item, addedClass) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            window.addEventListener("load", appear(item, addedClass));
            resolve();
        }, waitTime);
    })      
}

// running the fade-in code
let time = 300
appearDelay(time, "#nav-top")
.then(() => appearDelay(time, ".inside-left"))
.then (() => appearDelay(time, ".inside-right"))
.then(() => appearDelay(500, ".inside-right img"))  //avatar picture
.then (() => appearDelay(500, "#slogan-inner", "slogan-you-visible"))   //changing the colour of "you"
.then(() => appearDelay(time, "#text-interactive")) //member sign-in
.then(() => appearDelay(1000, "#main-text"))    //the main text



