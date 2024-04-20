let menuicon=document.querySelector(".menu-img");
let sidebar=document.querySelector(".left-pannel");
let mainbody=document.querySelector(".main-body");
menuicon.onclick = function()
{
    sidebar.classList.toggle("small-sidebar");
    mainbody.classList.toggle("New-main-body");
}

