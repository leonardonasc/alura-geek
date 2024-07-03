

async function listaProdutos() {
  const req = await fetch("http://localhost:4000/produtos");
  const response = await req.json();

  return response;
}

async function criaProduto(nome, preco, imagem) {
  const req = await fetch("http://localhost:4000/produtos", {
    method: "POST",
    headers: {
      "Content-type": "application/json" 
    },
    body: JSON.stringify({
      nome: nome,
      preco: preco,
      imagem: imagem
    })
  });

  const response = await req.json();
  return response;
}


async function deletaProduto(id) {
  const req = await fetch(`http://localhost:4000/produtos/${id}`, {
    method: "DELETE"
  });

  if (!req.ok) {
    throw new Error("Erro ao deletar o produto");
  }

  return true;
}

export const apiConnect = {
  listaProdutos,
  criaProduto,
  deletaProduto
}
