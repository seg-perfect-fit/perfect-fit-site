//Taha Rashid
// Oct 24, 2024
// JS file for index.html

// get items to fade in when the screen loads initially
const appear = (item, addedClass = "visible") => {
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
    .then(() => appearDelay(time, ".inside-right"))
    .then(() => appearDelay(time, ".inside-right img"))  //avatar picture, 500delay
    .then(() => appearDelay(500, "#slogan-inner", "slogan-you-visible"))   //changing the colour of "you", 500delay
    .then(() => appearDelay(time, "#text-interactive")) //member sign-in
    .then(() => appearDelay(time, "#app-stores"))
    .then(() => appearDelay(1000, "#main-text"))    //the main text, 1000delay


//properly scale the details div with the shirt image
const dynamicSize = () => {
    const shirt = document.querySelector("#background-img-details img");
    const details = document.querySelector("#main-text");
    const insideShirt = document.querySelector("#inside-shirt")
    //if we want to change the position of the div relative to the shirt, we can /100 * a % we want it to be down
    //to be fully below, just *100!
    //previously set to 68, 99.9
    // NOTE: the current div is going over the text, so some parts of the shirt's image is cut off if it is less than 100%
    let detailsMarginTop = (shirt.height / 100) * 50;
    details.style.marginTop = `${detailsMarginTop}px`;
}

// apply the scaling changes as the screen size changes. Also, run it initially
window.addEventListener("load", dynamicSize() )
window.onresize = function() {
    dynamicSize();
}