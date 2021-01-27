
//IIFE Immediately Function Expression
//AKA - Anonymous Self- Executing Function
//Closure - Limits scop leak

"use strict";

(function()
{
    function Start()
    {
        console.log("App started ...");
        let paragraphOneText = "This is a simple site to demonstrate DOM manipulation for ICE 1";

        let myNumber = 10.5;
        myNumber = "myNumber";
        console.log(myNumber);
    }
    window.addEventListener("load", Start);
})();