

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