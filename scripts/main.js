import { createTable } from "./createTable.js";
import { modalError, closeModalError } from "./components/modals.js";
import { screenLoader, closeScreenLoader } from "./components/screenLoad.js";

const cnpj = document.querySelector('.field');
const infoModal = document.querySelector('.modal-info');
const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal');
const btnSearch = document.querySelector('.btn-search')

// Chamada a API
document.querySelector('.insert-company').addEventListener('submit', (e) => {
   btnSearch.disabled = true
   screenLoader()
   e.preventDefault();

   let cnpjValue = cnpj.value;

   if (cnpjValue.length === 14) {
      fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjValue}`)
         .then(res => {
            if(!res.ok) {
               modalError('CNPJ não encontrado...')
            }
            return res.json()
         })
         .then(data => {
            if (data.cnpj === cnpjValue) {
               createTable(data);
               cnpj.value = '';
            }
         })
         .finally(() => {
            btnSearch.disabled = false
            closeScreenLoader()
         })
         .catch(err => {
            modalError('Houve um erro ao buscar a API')
         });
   }

   if (cnpjValue.length < 14 || cnpjValue.length > 14) {
      modalError('Digite 14 caracteres!')
   }
});

// Limpa o input ao clicar sobre o botão X
document.addEventListener('click', (e)=> {
   if (e.target.classList.contains('field-clear')) {
      cnpj.value = ''
   }
})

// Fecha com o modal com o botão
document.addEventListener('click', (e) => {
   if(e.target.classList.contains('modal-close')) {
   closeModalError()
   }
})

// Fecha o modal clicando fora
document.addEventListener('click', (e) => {
   if(e.target.classList.contains('modal-bg')) {
      closeModalError()
   }
})

// Fecha o modal com ESC
document.addEventListener('keydown', (e) => {
   if(e.key === 'Escape') {
      closeModalError()
   }
})