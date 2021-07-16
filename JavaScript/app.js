/*
 Filename: app.js
 Author: Brian Twene (bt521)
 Date: 16/07/2021
 */
//Declare variabes to for DOM elements
let open = document.querySelector("#about-button-desktop");
let close = document.querySelector("#close");
let modal = document.querySelector(".about-background")
let open_mobile = document.querySelector("#about-button-mobile") 

let colorPanel = document.querySelector(".color-display");
let colorField = document.querySelectorAll(".color-field");

//function call to generate color on page load
main();

//function definition main
function main(){
    let colorarr = getRandNum()
    generate(colorarr);

}

//function definition for generating random numbers
//from 0 to 255
function random(){
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}

//function definition
function getRandNum(){
    //declare all variables
    let j = 3;
    let randarr = [];
    let finalarr = [];
    let rgbstr = "("
    var hexstr = "#";
    
    // generate an array of random numbers
    for (let i = 0; i < j; i++){
        randarr.push(random());
    }

    //convert each number to hex and concatenate
    for (let i = 0; i < j; i++){
        hexstr = hexstr.concat(randarr[i].toString(16).toUpperCase());
    }
    //contcatenate numbers together for rgb string
    rgbstr = rgbstr.concat(randarr[0],",",randarr[1],",",randarr[2],")")

    //push the strings into an array
    finalarr.push(hexstr);
    finalarr.push(rgbstr);

    //return array to main
    return finalarr;
}
//function definition: uses DOM to change the styling and value in html
function generate(colorarr){
    //declare variable
    let j = 2;
    //use for loop to set attributes in the input field
    for(let i = 0; i < j; i++){
        colorField[i].setAttribute("value",colorarr[i])
    }
    //set the background color of the panel to the generated color
    colorPanel.style.backgroundColor = colorarr[0];
}

//function definiton: main function that runs all the little functions
function main(){
     let colorarr = getRandNum()
     generate(colorarr);

}


//event listener for desktop about button
open.addEventListener("click", function e(){
    if(!modal.classList.contains("open")){
        modal.classList.add("open");
        modal.classList.remove("close");
    }    
});

//event listener for mobile button version
open_mobile.addEventListener("click", function e(){
    if(!modal.classList.contains("open")){
        modal.classList.add("open");
        modal.classList.remove("close");
    }    
});
//event listener for the close button
close.addEventListener("click", function e(){
    if(modal.classList.contains("open")){
        modal.classList.remove("open");
        modal.classList.add("close");
    }
});