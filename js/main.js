
const btnLimpar = document.querySelector("#btn-limpar");

btnLimpar.addEventListener("click", () => {
  document.querySelector("#form-name").value = "";
  document.querySelector("#form-preco").value = "";
  document.querySelector("#form-imagem").value = ""; // checar mais tarde
})