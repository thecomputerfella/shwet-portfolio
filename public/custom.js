

// function myFunction(event) { 
//     console.log(event.target.nodeName);
// }

// OPEN LOGIN MODAL
var openModal = document.getElementById("login-btn");
openModal.addEventListener('click',function(){
    console.log("login tap");
    document.getElementById("login-modal").style.display = "flex";
    event.preventDefault();
});

function openLogin(){
    document.getElementById("login-modal").style.display = "flex";
    document.getElementById("signup-modal").style.display = "none";
    document.getElementById("success-modal").style.display = "none";
}

//CLOSE LOGIN, SIGNUP & SUCCESS MODAL
function closeModal(){
    console.log("close tap");
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("signup-modal").style.display = "none";
    document.getElementById("success-modal").style.display = "none";
    event.preventDefault();
}
//OPEN SIGNUP MODAL 
var openSignUp = document.getElementById("signup-btn").addEventListener('click',function(){
    console.log("tapped signup");
    document.getElementById("login-modal").style.display = "none";  //close login modal
    document.getElementById("signup-modal").style.display = "flex"; //show signup modal
});
//OPEN SUCCESS MODAL
function signupSuccess(){
    document.getElementById("signup-modal").style.display = "none";  //close login modal
    document.getElementById("success-modal").style.display = "flex"; //show success modal
    event.preventDefault();
}

//LOGIN VALIDATION
function fvalidation(){
    var username = document.forms["shwet-login"]["username"].value;
    if (username == "") {
      document.getElementById("username-alert").innerHTML = "username is incorrect";
    }

    else{
        document.getElementById("username-alert").innerHTML = "";
    }

    var password = document.forms["shwet-login"]["password"].value;
    if(password == ""){
        document.getElementById("password-alert").innerHTML = "password is incorrect";
    }
    else{
        document.getElementById("password-alert").innerHTML = "";
    }


    event.preventDefault();
}



