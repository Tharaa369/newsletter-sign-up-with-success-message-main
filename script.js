document.getElementById("submit").addEventListener("click", (e) => { 
    e.preventDefault();
    let email = document.getElementById("email");
    if (validateEmail(email.value)) {
        document.getElementById("invalidTxt").style.display = "none";
        document.getElementById("Sign-up").style.display = "none";
        document.getElementById("success-msg").style.display = "block";
        document.getElementsByTagName("main")[0].classList.add("ali-center");
        
    } else {
        document.getElementById("invalidTxt").style.display = "block";
    }
});
document.getElementById("dismiss").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("Sign-up").style.display = "flex";
    document.getElementById("success-msg").style.display = "none";
    document.getElementsByTagName("main")[0].classList.remove("ali-center");
        
});
function validateEmail(emailField) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailField.match(validRegex)) 
    {
        return true;
    }
    else
        return false;

}

