const fullName =  document.getElementById("fullname");
const emailAddress = document.getElementById("emailaddress");
const message = document.getElementById("message");

function sendMail(contactForm) {
    emailjs.send("gmail", "fayskerritt.com", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function() {
            alert("Message successfully sent");
            fullName.value = "";
            emailAddress.value = "";
            message.value = "";
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
    
}

(function(){
    emailjs.init("user_QYskVycifaK0UqgrfkXIi");
})();