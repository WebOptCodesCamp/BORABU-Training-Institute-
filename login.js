const grades = ["A" ,"A-" ,"B+" ,"B" ,"B-", "C+" , "C" ,"C-"  ,"D+" ,"D"  ,"D-", "E"           ];
console.log(grades);
let i = 0;
let gradet = grades.length;
let results = [];
let n = 0 ;
while(gradet>i){
  
  let currentgrade = grades[n];
 results.push({grade:currentgrade,value:gradet});
  gradet -= 1;
  n += 1;
}
console.log(results);

$.each(results, (key,value)=>{
  $("#grade").append(`            <option value="${value.value}">${value.grade}</option>`);
});
let courses = [{
  name :"Diploma in Fashion, Hairdressing & Beauty therapy ",
 grade :5 ,
  
},{
  name :" Certificate  in Fashion, Hairdressing & Beauty therapy ",
 grade :2 ,
  
},
{
  name :"Artisan in Fashion, Hairdressing & Beauty therapy ",
 grade :1 ,
  
},
{
  name :"Diploin in Electrical & Electronics Engineering ",
 grade :5 ,
  
},
{
  name :"Certificate in Electrical & Electronics Engineering ",
 grade :3 ,
  
},
{
  name :"Artisan in Electrical & Electronics Engineering ",
 grade :1 ,
  
},
{
  name :"Diploma in Information Communication Technology ",
 grade :5 ,
  
},
{
  name :"Certificate in Information Communication Technology ",
 grade :3,
  
},
];
console.log(courses)


$.each(courses , (key,value)=>
$("#slt").append(`  <option value="${value.grade}" name="${value.name}">${value.name} </option>`)
);





function confirm(){
 let course = eval(document.getElementById('slt').value);
var value   =  eval($("#grade").val());
console.log(course,value);
let move = "go";
if ( course > value) {
  let warn = document.getElementById("warn");
  let button = document.getElementById("go");
    button.style.background = "rgb(191,12,12)";
    button.style.display = "none";
    button.addEventListener("click", function(){
   button.setAtrribute("disabled","true")
    });
warn.style.display = "block";
warn.innerHTML = "you failed to meet the minimum requirement for the course ";
move = "no";
  return;
}else{
  warn.style.display = "none";
  
  let input1 = document.getElementById('fname1');
    let input2 = document.getElementById('fname2');
  
  let input3= document.getElementById('fname3');
    let input4 = document.getElementById('index');
    if(input1.value && input2.value && input3.value && input4.value &&move=="go"){
   
     let button = document.getElementById("go");
     button.style.display = "block";
    button.style.background = "green";
    button.addEventListener("click", function(){
    
    sendmail();
    });
    
   
    
  }
  
}

}

let changer = document.getElementById("grade");
changer.addEventListener("change",function(e){
  
  
  confirm();
})


function getsub(){
  alert("am being submitted ");
}