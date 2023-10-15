

function sendmail(){
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
let num  = eval($("#slt").val());
let name = $("#fname1").val();
const result = courses.find(({ grade }) => grade ===  num );
console.log(result)
  const params = {
    to:$("#fname1").val(),
    emailID:$("#fname2").val(),
    message:` Dear ${name} we have received have greatefull received your application form for course ${result.name} , you will receive very soon a calling letter and a fees structure  through your WhatsApp. Thanks in advance`,
    
  };
  console.log(params);
  
  Email.send({
    SecureToken : "d4a7b1ac-67ab-48bc-8edf-578690844bb0",
    To : params.emailID,
    From : "oparerojoseph@gmail.com",
    Subject : params.message,
    Body : "And this webopt the developer"
}).then(
  message => alert(message)
);
}



