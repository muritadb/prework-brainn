import './style.css'

const app = document.querySelector('[data-js="app"]');

document.querySelector('.app').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`


const link = document.querySelector(".link")

link.addEventListener('click',(e) => {
  e.preventDefault();
  app.classList.toggle('hidden');
  console.log("cliquei") 
}, false)

