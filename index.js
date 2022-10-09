var bar = document.getElementById("bar");
var nav = document.getElementById("menu-link");
var cancel = document.getElementById("cancel");

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
    cancel.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}