
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
        // Step 2: Configure the element
        newParagraph.setAttribute("id","paragraphTwo");
        newParagraph.textContent = "... And this is paragraph two";
        // Step 3: Select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        // Step4: Add/Insert the element
        mainContent.appendChild(newParagraph);

        newParagraph.className = "fs-6";

        let paragraphThree= `<p class="fs-7 fw-bold">And this is the third paragraph</p>`;
    }
    window.addEventListener("load", Start);
})();