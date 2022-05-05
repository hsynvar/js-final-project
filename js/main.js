'use strict'

let a = document.querySelectorAll('.expLore .topText ul li a')
let botBig = document.querySelectorAll('.expLore .botBig')


for (let i = 0; i < a.length; i++) {
    a[i].onclick = function () {
        for (let j = 0; j < botBig.length; j++) {
            botBig[j].classList.remove("bigActive")
       a[j].classList.remove('active')
        }
       botBig[i].classList.add('bigActive')
       a[i].classList.add('active')
    }
}
