
//IIFE Immediately Function Expression
//AKA - Anonymous Self- Executing Function
//Closure - Limits scop leak

"use strict";

(function()
{
    function displayHome()
    {
        let paragraphOneText =
          "This is a simple site to demonstrate DOM manipulation for ICE 1";

        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5";

        // Step 1: document.createElement
        let newParagraph = document.createElement("p");
        // Step 2: Configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "... And this is paragraph two";
        // Step 3: Select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        // Step4: Add/Insert the element
        mainContent.appendChild(newParagraph);

        newParagraph.className = "fs-6";

        //another way of injecting content
        let paragraphDiv = document.createElement("div");
        let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the third paragraph</p>`;
        paragraphDiv.innerHTML = paragraphThree;

        //example of inserting before a node.
        //  newParagraph.before(paragraphDiv)

        //example of inserting after a node.
        newParagraph.after(paragraphDiv);

        //delete elements
        //paragraphOneElement.remove();

        //example of remove child
        mainContent.removeChild(paragraphOneElement);

        //update / modification
        // mainContent.firstElementChild.textContent = "Welcome Home";

        mainContent.innerHTML = `<h1 id="firstHeading">Welcome to WEBD6201 - ICE 1</h1>
     <p id="paragraphOne" class="fs-3 fw-bold">This is my first paragraph</p>
     `;

    }

    function displayAbout()
    {

    }

    function displayProducts()
    {

    }

    function displayServices()
    {

    }

    function displayContact()
    {
        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        //form validation
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function(){

            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
            }

        })
    }

    function Start()
    {
        console.log("App started ...");
        console.log(document.title);
        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Products":
              displayProducts();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact Us":
              displayContact();
            break;
        }
     

    }
    window.addEventListener("load", Start);
})();