function SendMail(){
    var params={
        from_name:document.getElementById("fullname").value,
        email_id:document.getElementById("email_id").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_r1owh2o","template_qjdnjld",params).then(function(res){
        alert("Success! " + res.status);

    })
}