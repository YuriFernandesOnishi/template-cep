let logradouro = document.getElementById("logradouro");
let bairro = document.getElementById("bairro");
let regiao = document.getElementById("regiao");
let estado = document.getElementById("estado");

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      logradouro.innerText = data.logradouro;
      bairro.innerText = data.bairro;
      regiao.innerText = data.localidade;
      estado.innerText = data.estado;
    })
    .catch((error) => {
      console.error("Erro ao buscar CEP:", error);
    });

}

buscarCep("04773-150");