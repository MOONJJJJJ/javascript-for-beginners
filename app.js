const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form Button");

function onLoginBtnClick(){
    alert("click!!");
    loginInput.value = "WOW!!";
}

loginButton.addEventListener("click",onLoginBtnClick);