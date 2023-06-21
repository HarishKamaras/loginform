const firstNameEle = document.querySelector(".fn");
const lastNameEle = document.querySelector(".ln");
const emailEle = document.querySelector(".email");
const passwordEle = document.querySelector(".password");
const btnSubmitEle = document.querySelector(".btn-submit");

const formEle = document.querySelector("#form");
const message = document.querySelector(".message");
const toggle = document.querySelector(".toggle");
const checkbox= document.querySelector(".checkbox");

let fn="";
let ln = "";
let emailId = "";
let password = "";

firstNameEle.addEventListener("keyup", (event) => {
    fn = event.target.value;
})

lastNameEle.addEventListener("keyup", (event) => {
    ln = event.target.value;
})

emailEle.addEventListener("keyup", (event) => {
    emailId = event.target.value;
})

passwordEle.addEventListener("keyup", (event) => {
    password = event.target.value;
})

formEle.addEventListener("submit", (event) => {
    event.preventDefault();
})

btnSubmitEle.addEventListener('click', (e) => {
    //e.preventDefault();
    if (fn.length>0 && ln.length>0 && emailId.length>0 && password.length>0){
        message.innerText = "Form Submitted First name : "+fn+" Last name :"+ln +"Email : "+emailId;
         //  firstNameEle.value="";
        //  lastNameEle.value = "";
        //  emailEle.value = "";
        //  passwordEle.value = "";
        formEle.reset();
    }
        
})

toggle.addEventListener("click",()=>{
    if (passwordEle.type=== "password"){
        passwordEle.type = "text";
    }else{
        passwordEle.type = "password";
    }
})

btnSubmitEle.disabled = true;
checkbox.addEventListener("click",()=>{
    if(checkbox.checked==true){
        btnSubmitEle.disabled = false;
        console.log("hi")
    }else
    {
        btnSubmitEle.disabled = true;
    }
})
//btnSubmitEle.disabled = true;

// function myFunction() {
//     var x = document.getElementById("myInput");
//     if (x.type === "password") {
//       x.type = "text";
//     } else {
//       x.type = "password";
//     }
//   }

