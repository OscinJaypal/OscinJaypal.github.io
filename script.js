function sendMail(){
    let parms = {
        name: document.getElementsByName("name").value,
        email: document.getElementByName("email").value,
        message: document.getElementsByName("message").value,
        }
    emailjs.send("service_et1b8w2","template_26lwo5p",parms).then(alert("Email Sent!"))
    }