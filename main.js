function getdown() {
  document.getElementById("bt").style.top= "70%";
    
document.getElementById("bt").style.transition= "5s";
}
function getclose () {
  // body...
  sidebar.style.right = "-250px";
}
function medown() {
  // body...
  document.getElementById("btn").style.top= "70%";
document.getElementById("btn").style.transition= "5s";
}
let sidebar = document.getElementById("sidebar");
function getmenu() {
  // body...
  sidebar.style.right = "0";
}


students = [
  {name :"jane okoth",
    profile :"images/megan.png",
    story : "Borabu training institute is a great college i give it 9/10 💪🧡💙",
    
  },
    {name :"Mary achieng",
    profile :"images/mary.png",
    story : "Borabu training institute is a great college i give it 9/10 i really love it💫🌟✨❤️"  ,
    
  },
  {name :"Victor  smith",
    profile :"images/joy.png",
    story : "Borabu training institute is a huge college i give it 9/10 hug & kises👄⚡🌙 😇🎉hug",
    
  },  
    {name :"jack owen",
    profile :"images/keith.png",
    story : "Borabu training institute is a great college i give it 9.5/10 ❤️😋❤️",
    
  },
    {name :"Tim  Lee",
    profile :"images/ali.png",
    story : "Borabu training institute is a great college i give it 9/10 ❤️🔥💥❤️. so you will not regret 🥶🤕 for taking your son or daughter into this school",
    
  },
    {name :"Ahmes charles",
    profile :"images/Tom.png",
    story : "Borabu training institute is a big  college with quality education i give it 10/10 ❤️️💤💯❤️",
    
  },
  ];
  console.log(students.length);
  
  
  $.each(students, function(key, value) {
    console.log(key)
  $("#chats").append(`<div class="st-item">
    <div class="flex">
  <img class="profile" src="${value.profile}" alt="" />
  <h1 class="user">${value.name}</h1>
  <span> 👍👍❤️</span>
    </div>
    <p class="chat">${value.story}</p>
  </div>`);
});


function login(){
  window.open("login.html");
}


let main = document.getElementById("main") ;
main.addEventListener("scroll", function(){
  getclose();
} )