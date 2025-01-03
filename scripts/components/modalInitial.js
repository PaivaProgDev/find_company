import { saveLocal } from "../savedLocal.js";

const container = document.querySelector(".container");
const body = document.querySelector("body");
let initialModalBg;

export const openInitialModal = () => {
  if (localStorage.getItem("initial-modal") === "true") {
    return;
  }

  const initialModal = document.createElement("dialog");
  initialModal.className = "initial-modal";
  initialModal.innerHTML = `
        <div class="initial-modal-content">
            <h2 class="title-initial-modal">Seja bem-vindo(a)</h2>
            <div class="initial-modal-tips">
               <p>Aqui vai algumas dicas para você desfrutar o máximo desse projeto:</p>
               <ul class="tips">
                  <li>
                     <p class="observation">- Acesibilidade</p>
                     <p class="valuable-tip">
                        Se você estiver em um Desktop
                        use a tecla <span style="color: #5d5fef; font-weight: 800;">TAB</span>
                        para "viajar" entre os botões e
                        elementos clicáveis, garantindo assim uma experiência agradável.
                     </p>
                  </li>
                  <li>
                     <p class="observation">- CNPJ para testes</p>
                     <img style="width: 100%; max-width: 15rem; padding: 5px 0;" src="./assets/img/preview-modal.png"
                        alt="Botão menu do topo">
                     <p class="valuable-tip">
                        No canto superior direito, há um botão com uma lista de CNPJ para testar, caso você não tenha
                        um.
                     </p>
                  </li>
                  <li>
                     <p class="observation">- Campo de entrada (input)</p>
                     <p class="valuable-tip">
                        Por padrão, o CNPJ exige 14 números, sem contar os caracteres. Se você errar um número, mais que
                        esteja dentro do limite máximo, aparecerá um modal, caso tenha menos, ou mais que 14
                        números, aparecerá um outro modal diferente, enfim,
                        abra a lista acima, copie e cole os números, digite números errados, números aleatórios... etc,
                        você é livre para testar da sua maneira!
                     </p>
                  </li>
                  <li>
                     <p class="observation">- Resultado da Busca (input)</p>
                     <ul class="valuable-tip">
                        <p>A tabela é gerada, a partir dos dados vindos da API, nela contém:</p>
                        <ul class="list-content-card-initial-modal">
                           <li>• Razão Social</li>
                           <li>• Natureza Jurídica</li>
                           <li>• Situação Cadastral</li>
                           <li>• Abertura</li>
                           <li>• Porte</li>
                           <li>• Capital Social</li>
                           <li>• Atividades primárias/secundárias</li>
                           <li>• Telefone</li>
                           <li>• Endereço</li>
                        </ul>
                        <p>Obtenha mais CNPJ no site:
                           <a target="_blank" class="generator-cnpj-link" title="Gerador de CNPJ"
                              href="https://www.invertexto.com/gerador-de-cnpj">Invertexto.com</a>
                        </p>
                     </ul>
                  </li>
               </ul>
            </div>
            <p>Caso queira checar essas informações novamente, clique sobre o icone no lado inferior direito.</p>
            <button class="btn-close-modal-initial">
               <ion-icon style="pointer-events: none;" name="arrow-forward-outline"></ion-icon>
            </button>
         </div>
    `;
  container.appendChild(initialModal);
  initialModalBg = initialModal;
  initialModalBg.classList.add("active");
  body.classList.add("no-scroll");
};

export const closeInitialModal = (e) => {
  if (e.target.classList.contains("btn-close-modal-initial")) {
    initialModalBg.classList.remove("active");
    container.removeChild(initialModalBg);
    body.classList.remove("no-scroll");
    saveLocal();
  }
};

export const closeInitialModalOutsideClick = (e) => {
  if (e.target.classList.contains("initial-modal")) {
    initialModalBg.classList.remove("active");
    container.removeChild(initialModalBg);
    body.classList.remove("no-scroll");
    saveLocal();
  }
};

export const closeInitialModalEsc = (e) => {
  if (e.key === "Escape") {
    initialModalBg.classList.remove("active");
    container.removeChild(initialModalBg);
    body.classList.remove("no-scroll");
    saveLocal();
  }
};
