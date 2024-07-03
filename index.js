document.querySelector(".submit").addEventListener("click", function(){

    var firstname = document.querySelector(".firstnameinput").value;
    var lastname = document.querySelector(".lastnameinput").value;
    var emailinput = document.querySelector(".emailinput").value;
    var message = document.querySelector(".messageinput").value;
    var enquiry = document.getElementById("enquiry");
    var request = document.getElementById("request");
    var consent = document.getElementById("checkbox");
    


    if (firstname === ""){
        document.getElementById("first").style.visibility = 'visible';
        document.getElementById("firstnameinput").style.borderColor = "hsl(0, 66%, 54%)";

    }else{
        document.getElementById("first").style.visibility = 'hidden';
        document.getElementById("firstnameinput").style.borderColor ="";
    }

    if(lastname === ""){
        document.getElementById("last").style.visibility = 'visible';
        document.getElementById("lastnameinput").style.borderColor = "hsl(0, 66%, 54%)";
    }else{
        document.getElementById("last").style.visibility = 'hidden';
        document.getElementById("lastnameinput").style.borderColor = "";

    }

    if(emailinput === ""){
        document.getElementById("email").style.visibility = 'visible';
        document.getElementById("emailinput").style.borderColor = "hsl(0, 66%, 54%)";

    }else{
        document.getElementById("email").style.visibility = 'hidden';
        document.getElementById("emailinput").style.borderColor = "";

    }

    if(message === ""){
        document.getElementById("message").style.visibility = 'visible';
        document.getElementById("messageinput").style.borderColor = "hsl(0, 66%, 54%)";

    }else{
        document.getElementById("message").style.visibility = 'hidden';
        document.getElementById("messageinput").style.borderColor = "";

    }

    if (enquiry.checked || request.checked) {
        document.getElementById("query").style.visibility = "hidden"; // Hide error message
    } else {
        document.getElementById("query").style.visibility = 'visible'; // Show error message
    }

    if(consent.checked){
        document.getElementById("consent").style.visibility = 'hidden';
    } else {
        document.getElementById("consent").style.visibility = 'visible';
    }


    if (firstname!= "" && lastname != "" && emailinput != "" && message != "" && (enquiry.checked || request.checked) && consent.checked){
        
        document.getElementById("popup").style.visibility = 'visible';

    } 
});


enquiry.addEventListener("click", checkRadio);
request.addEventListener("click", checkRadio);

function checkRadio() {
var enquiry = document.getElementById("enquiry");
var request = document.getElementById("request");

if (enquiry.checked || request.checked) {
    document.getElementById("query").style.visibility = "hidden"; 
} else {
    document.getElementById("query").style.visibility = 'visible'; 
    }
}


consent.addEventListener("change", checkBox);

function checkBox(){
    var consent = document.getElementById("checkbox");
    if(consent.checked){
        document.getElementById("consent").style.visibility = 'hidden';
    } else {
        document.getElementById("consent").style.visibility = 'visible';
    }
    
}
