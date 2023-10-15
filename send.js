function sendEmail() { 
Email.send({
    SecureToken : "d4a7b1ac-67ab-48bc-8edf-578690844bb0",
    To : "weboptsamsungdev@gmail.com",
    From : "oparerojoseph@gmail.com",
    Subject : "welcome to borabu school",
    Body : "And this webopt the developer"
}).then(
  message => alert(message)
);
    } 