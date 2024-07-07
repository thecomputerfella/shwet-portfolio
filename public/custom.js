

// function myFunction(event) { 
//     console.log(event.target.nodeName);
// }

// OPEN LOGIN MODAL
// var openModal = document.getElementById("login-btn");
// openModal.addEventListener('click',function(){
//     console.log("login tap");
//     document.getElementById("login-modal").style.display = "flex";
//     event.preventDefault();
// });

function openLogin(url){
    document.querySelector('iframe.metvy-video').src = url;
    document.getElementById("login-modal").style.display = "flex";
    document.getElementById("modal-content").style.display = "flex";
    // document.getElementById("signup-modal").style.display = "none";
    // document.getElementById("success-modal").style.display = "none";
}

//CLOSE LOGIN, SIGNUP & SUCCESS MODAL
function closeModal(){
    console.log("close tap");
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("modal-content").style.display = "none";
    document.querySelector('iframe.metvy-video').src = "url";
    // document.getElementById("signup-modal").style.display = "none";
    // document.getElementById("success-modal").style.display = "none";
    // event.preventDefault();
}

// to add header background effect on scroll
document.addEventListener('scroll', ()=> {
    const header = document.querySelector('header');

    if(window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

// const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// if (!isMobile) {
//   /* your code here */
//     let child = document.querySelector(".timeline-date");
//     let parent = document.querySelector(".timeline-content");

//     parent.appendChild(child);
// }
// if(window.innerWidth <=800 ){
//     let child = document.querySelector(".timeline-date");
//     let parent = document.querySelector(".timeline-content");

//     parent.appendChild(child);
// }
