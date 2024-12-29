import { createTable } from "./createTable.js";

const cnpj = document.querySelector('.field');
const infoModal = document.querySelector('.modal-info');
const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal');

// Chamada a API
document.querySelector('.insert-company').addEventListener('submit', (e) => {
   e.preventDefault();

   let cnpjValue = cnpj.value;

   if (cnpjValue.length === 14) {
      fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjValue}`)
         .then(res => res.json())
         .then(data => {
            if (data.cnpj === cnpjValue) {
               createTable(data);
               cnpj.value = '';
            }

            if (data.cnpj !== cnpjValue) {
               modalBg.classList.add('active');
               modal.classList.add('active');
               infoModal.innerHTML = 'CNPJ não encontrado...';
            }
         });
   }

   if (cnpjValue.length < 14 || cnpjValue.length > 14) {
      modalBg.classList.add('active');
      modal.classList.add('active');
      infoModal.innerHTML = 'Digite 14 caracteres!';
   }
});

// Limpa o input ao clicar sobre o botão X
document.addEventListener('click', (e)=> {
   if (e.target.classList.contains('field-clear')) {
      cnpj.value = ''
   }
})

// Fecha com o modal com o botão
document.querySelector('.modal-close').addEventListener('click', () => {
   modalBg.classList.remove('active');
   modal.classList.remove('active');
})

// Fecha o modal clicando fora
document.addEventListener('click', (e) => {
   if(e.target.classList.contains('modal-bg')) {
      modalBg.classList.remove('active');
      modal.classList.remove('active');
   }
})

// Fecha o modal com ESC
document.addEventListener('keydown', (e) => {
   if(e.key === 'Escape') {
      modalBg.classList.remove('active');
      modal.classList.remove('active');
   }
})