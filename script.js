// Script for navigation bar
const bar= document.getElementById("Bar")
const nav=document.getElementById('navbar')
const close=document.getElementById("close");


if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

// For Sproducts
let mainImg=document.getElementById("MainImg")
let smallImg=document.getElementsByClassName("small-img")
for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        mainImg.src = smallImg[i].src;
    };
}
let page=document.querySelector('.card-containers')
page.addEventListener("click",()=>{
    location.replace("shop.html")
})