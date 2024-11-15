const toggle = document.getElementById('toggleDark');
var back = document.getElementById('back');
let nac = document.getElementById('body');
var back2 = document.getElementById('back2');
var panners = document.getElementById('panners');
var nav = document.getElementById('nav');
var nav2 = document.getElementById('nav2');
var nav3 = document.getElementById('nav3');

nav.style.color="black";
nav2.style.color="black";
nav3.style.color="black";
back2.style.visibility = "hidden" ; 
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){

        back.style.visibility = "visible" ; 
        back2.style.visibility = "hidden" ; 
        body.style.color="black";
        nav.style.color="black";
        nav2.style.color="black";
        nav3.style.color="black";
        
    }
    else{
        back.style.visibility = "hidden" ; 
        back2.style.visibility = "visible" ; 
        body.style.color="white";
        nav.style.color="white";
        nav2.style.color="white";
        nav3.style.color="white";

    }
})