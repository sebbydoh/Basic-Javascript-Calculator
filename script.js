"use strict";

//Number Buttons

let button_1 = document.getElementById("button-1");
let button_2 = document.getElementById("button-2");
let button_3 = document.getElementById("button-3");
let button_4 = document.getElementById("button-4");
let button_5 = document.getElementById("button-5");
let button_6 = document.getElementById("button-6");
let button_7 = document.getElementById("button-7");
let button_8 = document.getElementById("button-8");
let button_9 = document.getElementById("button-9");
let button_0 = document.getElementById("button-0");

//Operator Buttons

let button_plus = document.getElementById("button-plus");
let button_minus = document.getElementById("button-minus");
let button_multiply = document.getElementById("button-multiply");
let button_divide = document.getElementById("button-divide");

//Clear and Compute Buttons

let button_equals = document.getElementById("button-equals");
let button_clear = document.getElementById("button-clear");

//Create functions here

function createButtonEventListeners(){
    let buttonArray = [button_0, button_1, button_2, button_3, button_4, button_5, button_6, button_7, button_8, button_9];

    for(i = 0; i < 10; i++){
        button[i].addEventListener("click", needsFunction);
    }
}

function createOperatorEventListeners(){
    let operatorArray = [button_plus, button_minus, button_multiply, button_divide];

    for(i = 0; i < 4; i++){
        operator[i].addEventListener("click", needsFunction);
    }
}
//Line 34 and 42 need functions to call
