
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
        
        paragraphOneElement.textContent= paragraphOneText;
        paragraphOneElement.className="fs-5";  

        // Step 1: document.createElement
        let newParagraph  = document.createElement("p");
        newParagraph.setAttribute("id","paragraphTwo");
        newParagraph.textContent = "... And this is paragraph two";
    }
    window.addEventListener("load", Start);
})();