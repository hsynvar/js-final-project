'use strict'

// let home=document.querySelector('.courseGrid p .home')
// let grid=document.querySelector('.courseGrid p .grid')

// home.addEventListener('mouseover', function(event){
//     event.target.style.color='aqua'

// })
// home.addEventListener('mouseleave', function(event){
//     event.target.style.color='black'

// })
// ----------------- 

// let tabli = document.querySelectorAll ('.expLore li')
// let tabbox = document.querySelectorAll ('.expLore .botBig .courseBox ')
// for (let i = 0; i < tabli.length; i++) {
//    tabbox[i].onclick= function(){
//        for (let j = 0; j < tabbox.length; j++) {
//            tabbox[j].classList.remove('active')
//        }
//    }
// }

let a = document.querySelectorAll('.expLore .topText ul li a')
let courseBox = document.querySelectorAll('.expLore .botBig .courseBox')



a[0].addEventListener("click", function () {
    courseBox[0].style = 'display: block; opacity:1; visibility: visible'
    courseBox[1].style = 'display: block; opacity:1; visibility: visible'
    courseBox[2].style = 'display: block; opacity:1; visibility: visible'
    courseBox[3].style = 'display: block; opacity:1; visibility: visible'
    courseBox[4].style = 'display: block; opacity:1; visibility: visible'
    courseBox[5].style = 'display: block; opacity:1; visibility: visible'
    courseBox[6].style = 'display: block; opacity:1; visibility: visible'
    courseBox[7].style = 'display: block; opacity:1; visibility: visible'
});
a[1].addEventListener("click", function () {
    courseBox[0].style = "display:none; opacity:0; visibility: hidden";
    courseBox[1].style = "display:none; opacity:0; visibility: hidden";
    courseBox[2].style = "display:none; opacity:0; visibility: hidden";
    courseBox[4].style = "display:none; opacity:0; visibility: hidden";
    courseBox[5].style = "display:none; opacity:0; visibility: hidden";
    courseBox[7].style = "display:none; opacity:0; visibility: hidden";
    courseBox[3].style = 'display: block; opacity:1; visibility: visible'
    courseBox[6].style = 'display: block; opacity:1; visibility: visible'
});
a[2].addEventListener("click", function () {
    courseBox[0].style = "display:none; opacity:0; visibility: hidden";
    courseBox[1].style = "display:none; opacity:0; visibility: hidden";
    courseBox[2].style = "display:none; opacity:0; visibility: hidden";
    courseBox[4].style = "display:none; opacity:0; visibility: hidden";
    courseBox[3].style = 'display: block; opacity:1; visibility: visible'
    courseBox[5].style = 'display: block; opacity:1; visibility: visible'
    courseBox[6].style = 'display: block; opacity:1; visibility: visible'
    courseBox[7].style = 'display: block; opacity:1; visibility: visible'
});
a[3].addEventListener("click", function () {
    courseBox[1].style = "display:none; opacity:0; visibility: hidden";
    courseBox[4].style = "display:none; opacity:0; visibility: hidden";
    courseBox[5].style = "display:none; opacity:0; visibility: hidden";
    courseBox[6].style = "display:none; opacity:0; visibility: hidden";
    courseBox[0].style = 'display: block; opacity:1; visibility: visible'
    courseBox[2].style = 'display: block; opacity:1; visibility: visible'
    courseBox[3].style = 'display: block; opacity:1; visibility: visible'
    courseBox[7].style = 'display: block; opacity:1; visibility: visible'
});
a[4].addEventListener("click", function () {
    courseBox[0].style = "display:none; opacity:0; visibility: hidden";
    courseBox[1].style = "display:none; opacity:0; visibility: hidden";
    courseBox[2].style = 'display: block; opacity:1; visibility: visible'
    courseBox[3].style = 'display: block; opacity:1; visibility: visible'
    courseBox[4].style = 'display: block; opacity:1; visibility: visible'
    courseBox[5].style = 'display: block; opacity:1; visibility: visible'
    courseBox[6].style = 'display: block; opacity:1; visibility: visible'
    courseBox[7].style = 'display: block; opacity:1; visibility: visible'
});
a[5].addEventListener("click", function () {
    courseBox[0].style = "display:none; opacity:0; visibility: hidden";
    courseBox[5].style = "display:none; opacity:0; visibility: hidden";
    courseBox[1].style = 'display: block; opacity:1; visibility: visible'
    courseBox[2].style = 'display: block; opacity:1; visibility: visible'
    courseBox[3].style = 'display: block; opacity:1; visibility: visible'
    courseBox[4].style = 'display: block; opacity:1; visibility: visible'
    courseBox[6].style = 'display: block; opacity:1; visibility: visible'
    courseBox[7].style = 'display: block; opacity:1; visibility: visible'
});