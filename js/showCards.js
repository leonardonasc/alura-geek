import { apiConnect } from "./apiConnect.js";

const cards = document.querySelector("[data-cards]");

function cardCreator(id, nome, preco, imagem) {
  const produto = document.createElement("li");
  produto.className = "cards__item";
  produto.dataset.id = id;
  produto.innerHTML = ` <div class="card">
  <div class="img-card">
  <img src="${imagem}" alt="card img" />
  </div>
  <h2 class="nome-card">${nome}</h2>
  <div class="card-bottom">
    <p class="preco">$ ${preco}</p>
    <button id="trash-can">
      <img src="assets/imgs/trash.png" alt="apagar" id="delete-button" />
    </button>
  </div>
  </div>`;

  const deleteButton = produto.querySelector("#delete-button");
  deleteButton.addEventListener("click", async () => {
    const success = await deleteCard(id);
    if (success) {
      produto.remove();
    } else {
      alert("Falha ao deletar o produto. Tente novamente.");
    }
  });

  return produto;
}

async function deleteCard(id) {
  try {
    await apiConnect.deletaProduto(id);
    return true;
  } catch (error) {
    console.error("Erro ao deletar o produto:", error);
    return false;
  }
}

async function listaProdutos() {
  const listaApi = await apiConnect.listaProdutos();
  listaApi.forEach((item) =>
    cards.appendChild(cardCreator(item.id, item.nome, item.preco, item.imagem))
  );
}

listaProdutos();
