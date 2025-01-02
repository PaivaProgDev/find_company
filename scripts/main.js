import { createTable } from "./createTable.js";
import { modalError, closeModalError } from "./components/modals.js";
import { screenLoader, closeScreenLoader } from "./components/screenLoad.js";
import { openList, closeOutsideList, closePressList, copyToClipboard, addMenu } from "./components/cnpjList.js";

const cnpj = document.querySelector(".field");
const btnSearch = document.querySelector(".btn-search");
const btnList = document.querySelector(".btn-list");
const copyBtn = document.querySelectorAll('.copy-btn')

// Chamada a API
document.querySelector(".insert-company").addEventListener("submit", (e) => {
  btnSearch.disabled = true;
  e.preventDefault();

  let cnpjValue = cnpj.value;

  if (cnpjValue.length === 14) {
    screenLoader();
    fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjValue}`)
      .then((res) => {
        if (!res.ok) {
          modalError("CNPJ não encontrado...");
        }
        return res.json();
      })
      .then((data) => {
        if (data.cnpj === cnpjValue) {
          createTable(data);
          cnpj.value = "";
        }
      })
      .catch(() => {
        modalError("Houve um erro ao buscar o CNPJ");
      })
      .finally(() => {
        btnSearch.disabled = false;
        closeScreenLoader();
      })
  }

  if (cnpjValue.length < 14 || cnpjValue.length > 14) {
    modalError("Digite 14 caracteres!");
  }
});

// Limpa o input ao clicar sobre o botão X
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("field-clear")) {
    cnpj.value = "";
  }
});

// Fecha com o modal com o botão
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-close")) {
    closeModalError();
  }
});

// Fecha o modal clicando fora
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-bg")) {
    closeModalError();
  }
});

// Fecha o modal com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModalError();
  }
});

// Abre a lista de CNPJ
btnList.addEventListener("click", openList);

// Fecha a lista com clicando fora
document.addEventListener('click', closeOutsideList)

// Fecha a lista com ESC
document.addEventListener('keydown', closePressList)

// Copia o CNPJ para a área de transferência
copyBtn.forEach(cnpj => cnpj.addEventListener('click', copyToClipboard))
