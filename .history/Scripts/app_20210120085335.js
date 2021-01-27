
//IIFE Immediately Function Expression
//AKA - Anonymous Self- Executing Function
//Closure - Limits scop leak

(function()
{
    function Start()
    {
        console.log("App started ...");

    }
    window.addEventListener("load", Start);
})();