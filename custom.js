

// function myFunction(event) { 
//     console.log(event.target.nodeName);
// }

// OPEN LOGIN MODAL
var openModal = document.getElementById("login-btn");
openModal.addEventListener('click',function(){
    console.log("login tap");
    document.getElementById("login-modal").style.display = "flex";
    event.preventDefault();
})
//CLOSE LOGIN MODAL
function closeModal(){
    console.log("close tap");
    document.getElementById("login-modal").style.display = "none";
    event.preventDefault();
}

//LOGIN VALIDATION


