let txt = document.getElementById("txt");
let email = document.getElementById("email");
function sendMail(){
  Email.send({
    SecureToken : "d4a7b1ac-67ab-48bc-8edf-578690844bb0",
    To : "oparerojoseph@gmail.com",
    From : email.value,
    Subject : txt.value,
    Body : "And this webopt the developer"
}).then(
  message => alert(message);
  window.open("course.html");
);
  
};

function sendM(){
  alert("hello am here nnow");
}

