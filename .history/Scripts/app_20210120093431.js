
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

        let paragraphOneElement = document.getElementById("paragraphOne");
        let paragraphOneParagraph = document.getElementsByTagName("p")[0];

        console.log(paragraphOneElement);
        console.log(paragraphOneParagraph);
        
    }
    window.addEventListener("load", Start);
})();