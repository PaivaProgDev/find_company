import { saveLocal } from "./savedLocal.js";

const inputButton = document.querySelector('.insert-company')
const dataElement = document.querySelector('.company-data')
const addedTable = [];

export const createTable = (data) => {
   const secondaryActivity = [];
   data.cnaes_secundarios.forEach(cnaes => secondaryActivity.push(cnaes));
   addedTable.forEach(item => item.remove())

   dataElement.style.overflowY = "scroll";
   dataElement.classList.add('active')
   dataElement.innerHTML = `
         <h2 class="company-number">${data.cnpj}</h2>
            <div>
               <span>Razão Social</span>
               <output>${data.razao_social}</output>
            </div>
            <div>
               <span>Natureza Jurídica</span>
               <output>${data.natureza_juridica}</output>
            </div>
            <div>
               <span>Situação Cadastral</span>
               <output>${data.descricao_situacao_cadastral}</output>
            </div>
            <div>
               <span>Abertura</span>
               <output>${data.data_inicio_atividade}</output>
            </div>
            <div>
               <span>Porte</span>
               <output>${data.porte}</output>
            </div>
            <div>
               <span>Capital Social</span>
               <output>${data.capital_social}</output>
            </div>
            <div class="activitys">
               <span>Atividades</span>
               <ul class="CNAES">
                  <li>
                     <span>Primária</span>
                     <div>
                        <output>${data.cnae_fiscal} - </output>
                        <output>${data.cnae_fiscal_descricao}</output>
                     </div>
                  </li>
                  <li>
                     <hr class="line">
                  </li>
                  <li class="secondary-activities">
                     <span>Secundárias</span>
                  </li>
               </ul>
            </div>
            <div>
               <span>Telefone</span>
               <output>${data.ddd_telefone_1}</output>
            </div>
            <div>
               <span>CEP</span>
               <output>${data.cep}</output>
            </div>
            <div>
               <span>Endereço</span>
               <output>${data.logradouro}</output>
            </div>
            <div>
               <span>Bairro</span>
               <output>${data.bairro}</output>
            </div>
            <div>
               <span>Cidade</span>
               <output>${data.municipio}</output>
            </div>
            <div>
               <span>Estado</span>
               <output>${data.uf}</output>
            </div>
   `;
   inputButton.style.flexDirection = 'column'
   secondaryActivitiesGenerate(data);
   saveLocal()
};

// Funcão para gerar as atividades secundárias
const secondaryActivitiesGenerate = (data) => {
   data.cnaes_secundarios.forEach(activitie => {
      const secondaryLi = document.querySelector('.secondary-activities');
      const newDiv = document.createElement('div');

      if (activitie.codigo !== '' && activitie.descricao !== '') {
         newDiv.innerHTML = `
         <output>${activitie.codigo}</output> -
         <output>${activitie.descricao}</output>
      `;
      }

      secondaryLi.appendChild(newDiv);
   });
};

// Exibe os dados da última tabela após recarregar a página
document.addEventListener('DOMContentLoaded', () => {
   let itemElement = localStorage.getItem('tableElement')

   if(itemElement) {
      dataElement.classList.add('active')
      dataElement.innerHTML = itemElement
   }
   
   inputButton.style.flexDirection = 'column'
})
