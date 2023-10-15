const start = document.getElementById("start");
const user = document.getElementById("user");
const pass = document.getElementById("password");
const data = document.getElementById("data");
data.style.display = "none"
let log = document.getElementById("log");
let login = document.getElementById("login");
log.addEventListener("click",function(){
  if (user.value && pass.value) {
    login.style.display="none ";
login.style.transition = "4s";
data.style.transition = "4s";
  data.style.display = "block";
  setTimeout(function() {
    data.style.top = "15%";
  data.style.opacity = "1";
  }, 1000);
  }else{
    return;
  }

  
} );






function sendMail(){
  
  let email1= document.getElementById("email1");
    let message = document.getElementById("txt");
    if (email1.value && message.value) {
      

emailjs.send("service_sernsjc","template_majuvbr",{
from_name: "Okie ",
email_id: email1.value,
message: message.value,
});
    }
    
}

function getClose(){
  let menus = document.getElementById("menus");
  menus.style.left = "-250px";
  
}
function getOpen(){
  let menus = document.getElementById("menus");
  menus.style.left = "0";
  
}

function getSample(){
  window.open("OpareroWebApp.html");
};



