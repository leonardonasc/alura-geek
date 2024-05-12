

async function listaProdutos() {
  const req = await fetch("http://localhost:3000/produtos");
  const response = await req.json();

  return response;
}

async function criaProduto(nome, preco, imagem) {
  const req = await fetch("http://localhost:3000/produtos", {
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




export const apiConnect = {
  listaProdutos,
  criaProduto
}

