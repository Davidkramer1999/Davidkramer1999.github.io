function sendEmail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    const serviceId = "service_slug3ud";
    const templateId = "template_96jre2g";
    if(document.getElementById("email").value.length > 0)    {
    emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("your message has been send");
        })
        .catch(err => console.log(err))
    }else{
        alert("Please check again")
    }
    }
