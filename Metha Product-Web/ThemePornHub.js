const show = document.querySelector("#show");
const buttonTheme = document.querySelector("#Theme");
const nav = document.querySelector("#nav");
const body = document.querySelector("body")

loadlocalstorage();

let toggle = false;
buttonTheme.addEventListener("click",()=>{
    toggle = !toggle;
    if(toggle){
        localStorage.setItem("Theme","dark");
        show.setAttribute("style","background-color: black")
        nav.setAttribute("class","navbar navbar-dark bg-dark")
        body.setAttribute("style","background-color: black")
    }else{
        localStorage.setItem("Theme","light");
        show.setAttribute("style","background-color: white")
        nav.setAttribute("class","navbar navbar-light bg-light")
        body.setAttribute("style","background-color: white")
    }
})

function loadlocalstorage(){
    if(localStorage.getItem("Theme")=="dark"){
        show.setAttribute("style","background-color: black")
        nav.setAttribute("class","navbar navbar-dark bg-dark")
        body.setAttribute("style","background-color: black")
    }
}