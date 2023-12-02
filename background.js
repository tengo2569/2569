const darkmode = document.getElementById('changemode')
const h1 =document.querySelector('h1')
const h2 =document.querySelector('h2')
const sun =document.getElementById('moon')
const line2 = document.querySelector('.line2')
const inp = document.querySelector('.inp1')
const main =document.querySelector('main')
const box3 =document.querySelector('.box3')
const p1 = document.querySelectorAll('.p1')
const h3 = document.querySelector('.accname')
const body = document.querySelector("body")
const p2 = document.querySelectorAll(".p2")
const lastp = document.querySelectorAll(".lastp , a")
let defaultSrc = sun.src

darkmode.addEventListener("click", function () {
    body.classList.toggle('Getbackground')
    h1.classList.toggle("Getwhite")
    h2.classList.toggle("Getwhite")
    line2.classList.toggle("Getblack")
    inp.classList.toggle("Getblack")
    inp.classList.toggle("Getblackcolor")
    inp.classList.toggle("Getwhitecolor")
    main.classList.toggle("Getblack")
    box3.classList.toggle("Getbackground")
    h3.classList.toggle("Getwhitecolor")

    if (sun.src.includes(defaultSrc)) {
        sun.src = `assets/sun.svg`
        h2.innerHTML = "Light"
    }
    else {
        sun.src = `assets/moon.svg` 
        h2.innerHTML = "Dark"
    } 
    
    for (let i = 0; i < p1.length; i++){
        p1[i].classList.toggle("Getwhitecolor")
    }

    for (let i = 0; i < p2.length; i++){
        p2[i].classList.toggle("Getwhitecolor")
    }

    for (let i = 0; i < lastp.length; i++){
        lastp[i].classList.toggle("Getwhitecolor")
    }
})
