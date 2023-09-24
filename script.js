let btn=document.getElementById("login-btn");
let i=1;
btn.addEventListener("click",function(){
    var cont=document.querySelector(".container"); 
    if(i==1)
    {
        cont.classList.remove("active");
        cont.classList.add("passive");
        i=0;
    }
    else
    {
        cont.classList.remove("passive");
        cont.classList.add("active");
        i=1;
    }
    
});
