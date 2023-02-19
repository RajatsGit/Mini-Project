const bar = document.getElementById('bar');
const nav = document.getElementById('items');
const close = document.getElementById('close')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

let singleitemprice = document.getElementById('singleprice');
let totaldisplay = document.getElementById('totalinsame');
console.log(singleitemprice);
console.log(parseFloat(singleitemprice.replace (/[^\\d\\.]/g, '')))
function increaseAmount(e) {
    totaldisplay.innerText = `$ ${parseInt(e.target.value) * parseFloat(singleitemprice.replace(/\D/g, ''))}`
     
 }
