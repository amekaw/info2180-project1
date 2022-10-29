/* Add your JavaScript to this file */
window.onload = function()
{
    var msg = document.getElementsbyClassName("message");
    var buttn = document.querySelector("button");
    var eml = document.getElementbyId("email").value;
    buttn.addEventListener("click", function(event) 
    {
        event.preventDefault();
        if (eml == "") {
            msg[0].innerHTML = "Please enter a valid email address";    
    } 
    else {
        msg[0].innerHTML = "Thank you! Your email address " + eml + " has been added to our mailing list!";
    }
    });
}