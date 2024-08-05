function sendMail(){
    let parms = {
        name: document.getElementsById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementsById("message").value,
        }
emailjs.send("service_et1b8w2","template_26lwo5p",parms).then(alert("Email Sent!"))
}
