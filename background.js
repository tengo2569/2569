const darkmode = document.getElementById('changemode')
const h1 =document.querySelector('h1')
const line2 = document.querySelector('.line2')
const inp = document.querySelector('.inp1')
const main =document.querySelector('main')
const box3 =document.querySelector('.box3')
const p1 = document.querySelectorAll('.p1')
const h3 = document.querySelector('.accname')


darkmode.addEventListener('click', () => {
    const moon = document.getElementById('moon');
    const blacktxt = document.querySelector('.changemode h2');
    const body = document.body;

    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        blacktxt.innerHTML = 'LIGHT';
        moon.src = './assets/sun.svg';
        h1.style.color = '#22273'

    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        blacktxt.innerHTML = 'DARK';
        moon.src = './assets/moon.svg';
        h1.style.color = '  #FFF'
        line2.style.backgroundColor = '#1E2A47'
        inp.style.backgroundColor = '#1E2A47'
        main.style.backgroundColor = '#1E2A47'
        box3.style.backgroundColor = '#141D2F'
        p1.style.color = '#FFF'
        h3.style.color = '#FFF'
     
       

       
        
    }
});

