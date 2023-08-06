const loginInform = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form Button");

const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginInform.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username",username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginInform.classList.remove(HIDDEN_CLASSNAME);
    loginInform.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}