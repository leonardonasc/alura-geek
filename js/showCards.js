import { apiConnect } from "./apiConnect.js";

const cards = document.querySelector("[data-cards]");

function cardCreator(nome, preco, imagem) {
  const produto = document.createElement("li");
  produto.className = "cards__item";
  produto.innerHTML = ` <div class="card">
  <div class="img-card">
  <img src="${imagem}" alt="card img" />
  </div>
  <h2 class="nome-card">${nome}</h2>
  <div class="card-bottom">
    <p class="preco">$ ${preco}</p>
    <button id="trash-can"
      ><img src="assets/imgs/trash.png" alt="apagar" id=delete-button
    /></button>
    </div>
  </div>`;

  return produto;
}

async function listaProdutos() {
  const listaApi = await apiConnect.listaProdutos();
  listaApi.forEach((item) =>
    cards.appendChild(cardCreator(item.nome, item.preco, item.imagem))
  );
}




listaProdutos();

