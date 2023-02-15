function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    console.log(params);
    const serviceId = "service_slug3ud";
    const templateId = "template_96jre2g";

    emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message has been send");
        })
        .catch(err => alert(err))
    }
