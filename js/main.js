var formSubmit = document.getElementById("form1");
formSubmit.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("The first name is: " + document.getElementById("first").value);
    console.log("The last name is: " + document.getElementById("last").value);
    console.log("The email is: " + document.getElementById("email").value);
    console.log("The message is: " + document.getElementById("message").value);
});