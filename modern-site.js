const burger = document.querySelector(".burger");
const navbar = document.querySelector(".nav-content");

burger.addEventListener("click",()=>{
    navbar.classList.toggle("open");
    console.log("hello");
});

function toggle_theme(){
    var theme = document.getElementsByTagName('link')[0];

    if(theme.getAttribute('href') == 'style4-dark.css'){
        theme.setAttribute('href' , 'style4-light.css');
        console.log('Working!');
    } else {
        theme.setAttribute('href' , 'style4-dark.css');
    }
}